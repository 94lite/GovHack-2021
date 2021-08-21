from django.contrib.auth import get_user_model


def generate_password(length=24):
    import random
    import string

    chars_set = string.ascii_lowercase + string.ascii_uppercase + string.digits
    return "".join(random.SystemRandom().choice(chars_set) for i in range(length))


# Settings
ADMIN_NAME = "admin"
ADMIN_MAIL = "admin@testemail.co.nz"
ADMIN_PASS = generate_password()

try:  # Check if admin exists
    get_user_model().objects.get(username=ADMIN_NAME)

except get_user_model().DoesNotExist:  # If does not exists, Then create new one
    # Create User first
    get_user_model().objects.create_superuser(ADMIN_NAME, ADMIN_MAIL, ADMIN_PASS)

    # Get created user (Check its created successfully)
    user = get_user_model().objects.get(username=ADMIN_NAME)

    # Finally, print all information
    print("========= LOGIN INFO =========")
    print(f"USERNAME : {ADMIN_NAME}")
    print(f"PASSWORD : {ADMIN_PASS}")
    print("==============================")

else:
    print("Admin user already exists! Ignoring...")

exit(0)

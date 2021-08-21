import re

from django.core.exceptions import ValidationError


def validate_plate(plate: str) -> str:
    if plate is None or len(plate) == 0:
        raise ValidationError("Plate is empty!")

    elif re.match("^[a-zA-Z0-9]+$", plate) is None:
        raise ValidationError("Plate only can contain alphanumeric characters!")

    else:
        return plate

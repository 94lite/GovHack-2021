from rest_framework import serializers
from .models import TreeType, UserTree, CommunityTree


class TreeTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreeType
        fields = ["id", "name", "genus", "description", "image_url", "maturity_rate", "price", ]


class UserTreeSerializer(serializers.ModelSerializer):
    tree_info = serializers.SerializerMethodField(method_name="get_tree_info")

    def get_tree_info(self, instance: UserTree):
        return TreeTypeSerializer(instance.tree_type).data

    class Meta:
        model = UserTree
        fields = ["id", "name", "description", "tree_info", "planted_at", "planted_by", ]


class CommunityTreeSerializer(serializers.ModelSerializer):
    location = serializers.SerializerMethodField(method_name="get_location")

    def get_user_tree(self, instance: CommunityTree):
        return UserTreeSerializer(instance.tree).data

    def get_location(self, instance: CommunityTree):
        return {"latitude": instance.location_lat, "longitude": instance.location_lon}

    class Meta:
        model = CommunityTree
        fields = ["id", "location", "photo_url", "planted_at", ]


class UserTreeWithCommunitySerializer(UserTreeSerializer):
    community_tree = serializers.SerializerMethodField(method_name="get_community_tree")

    def get_community_tree(self, instance: UserTree):
        return CommunityTreeSerializer(instance.actual_tree).data if hasattr(instance, "actual_tree") else None

    class Meta:
        model = UserTree
        fields = UserTreeSerializer.Meta.fields + ["community_tree", ]

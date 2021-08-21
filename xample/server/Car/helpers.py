import requests
import json

from typing import Union

from .models import CarInformation


def query_car_info_by_plate(plate_no: str) -> Union[None, CarInformation]:
    query_url = f"https://rightcar.govt.nz/_ws/get_detail.aspx?params={{\"q\":\"P{plate_no}\"}}"
    response = requests.get(query_url)

    try:
        parsed = json.loads(response.text)

    except json.JSONDecodeError:
        return None  # Failed (Somehow..?)

    else:
        try:
            detail = parsed["detail"][0]

            car = CarInformation()

            car.plate = plate_no

            car.model = detail["model"]
            car.manufactured_year = detail["vehicle_year"]
            car.fuel_type = detail["fueltype"] if "fueltype" in detail else "OTHER"

            car.carbon_emission_rate = int(detail["CO2stars"]) if "CO2stars" in detail else -1
            car.fuel_economy_rate = int(detail["fuelstars"]) if "fuelstars" in detail else -1
            car.air_pollution_rate = int(detail["pollutantstars"]) if "pollutantstars" in detail else -1

            car.carbon_emission_description = str(detail["CO2rank"]) if "CO2rank" in detail else ""

            car.fuel_economy_description = str(detail["fuelrank1"]) if "fuelrank1" in detail else ""
            car.fuel_economy_description = (car.fuel_economy_description + "\n" + str(detail["fuelrank2"])) if "fuelrank2" in detail else car.fuel_economy_description

            car.air_pollution_description = str(detail["pollutantrank"]) if "pollutantrank" in detail else ""

            car.image_url = ("https://rc-resources.dotnous.com/vehicles/" + detail["photo"]) if "photo" in detail else ""

            car.save()

        except (KeyError, ValueError, IndexError):
            return None  # Does not exists,

        else:
            return car

import json


# class Truck to create Truck objects
class Truck:
    def __init__(self, truck_metrics):
        with open(truck_metrics) as all_data:
            self.truck_stats = json.load(all_data)

    # function to return total distance travelled by truck in km over 24hours
    def total_distance(self):
        hypotenuse = lambda x, y, z: (x ** 2 + y ** 2 + z ** 2) ** 0.5
        total_distance = 0
        container = []
        for tr in self.truck_stats:
            t = tuple(tr.values())
            coordinates = []
            if (t[2] or t[3]) and t[4]:
                coordinates.append(t[2])
                coordinates.append(t[3])
                coordinates.append(t[4])
                container.append(coordinates)
        if len(container) == 1:
            return 0
        else:
            for c in range(len(container) - 1):
                total_distance += hypotenuse((container[c + 1][0] - container[c][0]),
                                             (container[c + 1][1] - container[c][1]),
                                             (container[c + 1][2] - container[c][2]))
        return total_distance / 1000

    # function to return total fuel consumption per truck
    def total_fuel_consumption(self):
        fuel = []
        prev_rate = 0
        if self.truck_stats:
            for t in self.truck_stats:
                if tuple(t.values())[5]:
                    fuel.append(tuple(t.values())[5])
                    prev_rate = tuple(t.values())[5]
                else:
                    fuel.append(prev_rate)

            return (sum(fuel) / (len(fuel)))
        else:
            return 0

    # function to return total payload per truck if payload is not null
    def total_payload(self):
        if self.truck_stats:
            payload = [tuple(t.values())[7] for t in self.truck_stats if tuple(t.values())[7]]
            if payload:
                return (sum(payload)) / len(payload)
            else:
                return 0
        else:
            return 0

    # function to return non-productive time of truck object by status
    def non_productive(self, stats):
        non_productive = [2 for i in self.truck_stats if stats in tuple(i.values())[6]]
        return (sum(non_productive)) / 60 / 60

    # function to display all details
    def display_details(self):
        print(
            f"total_fuel_cons:{self.total_fuel_consumption()} Payload:{self.total_payload()} distance:{self.total_distance()} Queue Time: {self.non_productive('Queu')} Truck Loading: {self.non_productive('Load')} Dumping: {self.non_productive('Dump')} Non-Productive: {self.non_productive('NON')}")


truck = Truck(f"playground_trucksensordata.json")
truck.display_details()

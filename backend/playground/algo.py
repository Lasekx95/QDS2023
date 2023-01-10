import pandas as pd
data = [[1,54957.1311982728,212.2568],
[1,54963.6406167518,211.6884],
[1,54972.5363339888,211.2824],
[1,54976.8609985654,211.4448],
[1,54979.9444964331,211.4854],
[1,54981.4369800594,212.0132],
[1,54981.499255234,212.338],
[1,54978.0343056533,212.0132],
[1,54975.0171802838,211.8508]]

df = pd.DataFrame(data, columns = ['id', 'gps_northing', 'gps_easting'])

df["lat_diff"] = df.gps_northing.diff()
df["lon_diff"] = df.gps_easting.diff()

from math import sin, cos, sqrt, atan2

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # radius of Earth in kilometers

    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    return distance

df["distance"] = df.apply(lambda x: haversine_distance(x.gps_northing, x.gps_easting, x.gps_northing + x.lat_diff, x.gps_easting + x.lon_diff), axis=1)

total_distance = df["distance"].sum()

print(total_distance)
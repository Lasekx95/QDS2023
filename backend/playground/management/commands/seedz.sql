insert into playground_truck (truck_id, truck_type_id)
values  (0, 0),
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 3),
        (5, 3),
        (6, 3),
        (7, 4),
        (8, 3),
        (9, 3),
        (10, 4),
        (11, 3),
        (12, 3),
        (13, 3),
        (14, 3),
        (15, 3),
        (16, 4),
        (17, 3),
        (18, 3),
        (19, 2),
        (20, 3),
        (21, 3),
        (22, 3),
        (23, 3),
        (24, 3),
        (25, 3),
        (26, 1),
        (27, 3),
        (28, 3),
        (29, 4),
        (30, 1),
        (31, 3),
        (32, 3),
        (33, 3),
        (34, 3),
        (35, 3),
        (36, 1),
        (37, 3),
        (38, 2),
        (39, 3),
        (40, 2),
        (41, 3),
        (42, 4),
        (43, 3),
        (44, 3),
        (45, 2),
        (46, 3),
        (47, 3),
        (48, 2),
        (49, 3),
        (50, 1),
        (51, 3),
        (52, 4),
        (53, 3),
        (54, 3),
        (55, 1),
        (56, 3),
        (57, 3),
        (58, 3),
        (59, 4),
        (60, 3),
        (61, 1),
        (62, 3),
        (63, 3),
        (64, 4),
        (65, 0),
        (66, 1),
        (67, 3),
        (68, 1),
        (69, 0);


COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group0.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group1.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group2.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group3.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group4.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group5.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group6.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group7.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group8.csv' WITH (FORMAT CSV);
COPY playground_trucksensordata FROM '/Users/zachflentge-wong/Desktop/CSV Files/data_group9.csv' WITH (FORMAT CSV);

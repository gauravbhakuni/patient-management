-- Ensure the 'patient' table exists
CREATE TABLE IF NOT EXISTS patient
(
    id              UUID PRIMARY KEY,
    name            VARCHAR(255)        NOT NULL,
    email           VARCHAR(255) UNIQUE NOT NULL,
    address         VARCHAR(255)        NOT NULL,
    date_of_birth   DATE                NOT NULL,
    registered_date DATE                NOT NULL
    );

-- Insert Indian patient records
INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '123e4567-e89b-12d3-a456-426614174000',
       'Rahul Sharma',
       'rahul.sharma@mail.com',
       '12/4 MG Road, Bengaluru, Karnataka - 560001',
       '1985-06-15',
       '2024-01-10'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '123e4567-e89b-12d3-a456-426614174000');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '123e4567-e89b-12d3-a456-426614174001',
       'Priya Verma',
       'priya.verma@outlook.in',
       '102 Aundh Road, Pune, Maharashtra - 411007',
       '1990-09-23',
       '2023-12-01'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '123e4567-e89b-12d3-a456-426614174001');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '123e4567-e89b-12d3-a456-426614174002',
       'Amitabh Joshi',
       'amitabh.joshi@gmail.com',
       '25 Ashok Nagar, Bhopal, MP - 462003',
       '1978-03-12',
       '2022-06-20'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '123e4567-e89b-12d3-a456-426614174002');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '123e4567-e89b-12d3-a456-426614174003',
       'Sunita Rao',
       'sunita.rao@yahoo.in',
       '88 Sector 21, Noida, UP - 201301',
       '1982-11-30',
       '2023-05-14'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '123e4567-e89b-12d3-a456-426614174003');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '123e4567-e89b-12d3-a456-426614174004',
       'Neha Iyer',
       'neha.iyer@rediffmail.com',
       '5 Lloyds Road, Chennai, TN - 600014',
       '1995-02-05',
       '2024-03-01'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '123e4567-e89b-12d3-a456-426614174004');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174005',
       'Vikram Mehta',
       'vikram.mehta@protonmail.com',
       '17 Gariahat Road, Kolkata, WB - 700019',
       '1988-07-25',
       '2024-02-15'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174005');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174006',
       'Anjali Deshmukh',
       'anjali.deshmukh@mail.com',
       '44 Law Garden, Ahmedabad, Gujarat - 380006',
       '1992-04-18',
       '2023-08-25'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174006');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174007',
       'Manoj Pillai',
       'manoj.pillai@indiatimes.com',
       '8 MG Road, Thiruvananthapuram, Kerala - 695001',
       '1975-01-11',
       '2022-10-10'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174007');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174008',
       'Kavita Menon',
       'kavita.menon@tmail.com',
       '60 Jubilee Hills, Hyderabad, Telangana - 500033',
       '1989-09-02',
       '2024-04-20'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174008');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174009',
       'Rohan Bhattacharya',
       'rohan.bhatta@zmail.com',
       '9 Salt Lake, Kolkata, WB - 700091',
       '1993-11-15',
       '2023-06-30'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174009');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174010',
       'Sneha Kapoor',
       'sneha.kapoor@fastmail.in',
       '88 Sector 17, Chandigarh - 160017',
       '1980-08-09',
       '2023-01-22'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174010');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174011',
       'Yash Malhotra',
       'yash.malhotra@xyzmail.in',
       '45 Residency Road, Indore, MP - 452001',
       '1984-05-03',
       '2024-05-12'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174011');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174012',
       'Ritika Arora',
       'ritika.arora@outlook.in',
       '11 Malviya Nagar, New Delhi - 110017',
       '1991-12-25',
       '2022-11-11'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174012');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174013',
       'Arjun Singh',
       'arjun.singh@rediff.com',
       '3 Civil Lines, Allahabad, UP - 211001',
       '1976-06-08',
       '2023-09-19'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174013');

INSERT INTO patient (id, name, email, address, date_of_birth, registered_date)
SELECT '223e4567-e89b-12d3-a456-426614174014',
       'Meera Nair',
       'meera.nair@post.in',
       '29 Panampilly Nagar, Kochi, Kerala - 682036',
       '1987-10-17',
       '2024-03-29'
    WHERE NOT EXISTS (SELECT 1 FROM patient WHERE id = '223e4567-e89b-12d3-a456-426614174014');

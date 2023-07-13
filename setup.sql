-- CREATE TABLE Drink(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(30) NOT NULL,
-- 	image text,
-- 	price money NOT NULL,
-- 	tags VARCHAR(20) ARRAY,
-- 	life_effect smallint NOT NULL,
-- 	featured boolean NOT NULL
-- );

-- INSERT INTO Drink(name, price, tags, life_effect, featured) VALUES
-- ('Bottled Breath', 61.60, ARRAY['ingredient', 'violet'], -2, false),
-- ('Clear Tonic', 7.60, ARRAY['consumable'], 0, false),
-- ('Violet Essence', 22.60, ARRAY['ingredient', 'violet'], -1, false),
-- ('Heart Medium', 28.80, ARRAY['consumable', 'violet', 'draining'], -3, true),
-- ('Strong Coffee', 5.60, ARRAY['consumable', 'energizing'], -1, false),
-- ('Daffodil Milk', 4.95, ARRAY['consumable', 'energizing'], 4, false),
-- ('Cherry Brew', 8.90, ARRAY['consumable', 'draining'], 1, true),
-- ('Fig Extract', 4.95, ARRAY['ingredient', 'draining'], 2, false),
-- ('Chilled Lava', 51.60, ARRAY['ingredient'], -5, true),
-- ('Peach Bomb Soda', 5.60, ARRAY['consumable', 'energizing'], 1, true);

-- UPDATE drink SET image = pg_read_binary_file('.images/breath.jpg')::bytea WHERE name='Bottled Breath';
-- this stores img in bytea hex, use method encode(byta, base64) to get base 64 string to put in img tag

SELECT * FROM DRINK
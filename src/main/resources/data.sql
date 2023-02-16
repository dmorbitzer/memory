DELETE FROM CARD_SET_CARDS;
DELETE FROM CARD_SET;
DELETE FROM CARD;
DELETE FROM CARD_PAIR;

INSERT INTO CARD_PAIR (ID) VALUES (1);
INSERT INTO CARD_PAIR (ID) VALUES (2);
INSERT INTO CARD_PAIR (ID) VALUES (3);
INSERT INTO CARD_PAIR (ID) VALUES (4);
INSERT INTO CARD_PAIR (ID) VALUES (5);
INSERT INTO CARD_PAIR (ID) VALUES (6);
INSERT INTO CARD_PAIR (ID) VALUES (7);
INSERT INTO CARD_PAIR (ID) VALUES (8);
INSERT INTO CARD_PAIR (ID) VALUES (9);
INSERT INTO CARD_PAIR (ID) VALUES (10);

-- Erstellung der Start Wars Karten
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (1, 'https://wegener-clan.de/media/StarWars_Set/images/Episodei.png', 'image', 'star-wars-episode-1-image', 1);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (2, 'https://wegener-clan.de/media/StarWars_Set/videos/EpisodeI.mp4', 'video', 'star-wars-episode-1-video', 1);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (3, 'https://wegener-clan.de/media/StarWars_Set/images/Chewbacca.png', 'image', 'star-wars-chewbacca-image', 2);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (4, 'https://wegener-clan.de/media/StarWars_Set/sounds/Chewbacca.mp3', 'sound', 'star-wars-chewbacca-sound', 2);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (5, 'https://wegener-clan.de/media/StarWars_Set/images/Lichtschwert.png', 'image', 'star-wars-lichtschwert-image', 3);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (6, 'https://wegener-clan.de/media/StarWars_Set/sounds/Lichtschwert.mp3', 'sound', 'star-wars-lichtschwert-sound', 3);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (7, 'https://wegener-clan.de/media/StarWars_Set/images/obiwan.png', 'image', 'star-wars-obiwan-image', 4);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (8, 'https://wegener-clan.de/media/StarWars_Set/videos/obiwan.mp4', 'video', 'star-wars-obiwan-video', 4);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (9, 'https://wegener-clan.de/media/StarWars_Set/images/r2d2.png', 'image', 'star-wars-r2d2-image', 5);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (10, 'https://wegener-clan.de/media/StarWars_Set/sounds/r2d2.mp3', 'sound', 'star-wars-r2d2-sound', 5);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (11, 'https://wegener-clan.de/media/StarWars_Set/images/shot.png', 'image', 'star-wars-shot-image', 6);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (12, 'https://wegener-clan.de/media/StarWars_Set/sounds/shot.mp3', 'sound', 'star-wars-shot-sound', 6);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (13, 'https://wegener-clan.de/media/StarWars_Set/images/vader.png', 'image', 'star-wars-vader-image', 7);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (14, 'https://wegener-clan.de/media/StarWars_Set/sounds/vader.mp3', 'sound', 'star-wars-vader-sound', 7);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (15, 'https://wegener-clan.de/media/StarWars_Set/images/yoda.png', 'image', 'star-wars-yoda-image', 8);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (16, 'https://wegener-clan.de/media/StarWars_Set/sounds/yoda.mp3', 'sound', 'star-wars-yoda-sound', 8);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (17, 'https://wegener-clan.de/media/StarWars_Set/videos/Anakin.mp4', 'video', 'star-wars-anakin-1-video', 9);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (18, 'https://wegener-clan.de/media/StarWars_Set/videos/Anakin2.mp4', 'video', 'star-wars-anakin-2-video', 9);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (19, 'https://wegener-clan.de/media/StarWars_Set/videos/intro.mp4', 'video', 'star-wars-intro-video', 10);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (20, 'https://wegener-clan.de/media/StarWars_Set/sounds/intro.mp3', 'sound', 'star-wars-intro-sound', 10);

-- Erstellung der Harry Potter Karten
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (21, 'test-url.de/harry-wand.png', 'image', 'harry-potter-magic-wand', 1);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (22, 'test-url.de/harry-profile.png', 'image', 'harry-potter-profile', 1);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (23, 'test-url.de/hagrid-dragon.png', 'image', 'hagrid-dragon', 2);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (24, 'test-url.de/hagrid-hut.png', 'image', 'hagrid-hut', 2);

-- Erstellung der Herr der Ringe Karten
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (25, 'https://assets.reedpopcdn.com/in-lord-of-the-rings-gollum-seht-ihr-ringgeister-und-legolas-vater-1578404662017.jpg/BROK/thumbnail/1200x900/quality/100/in-lord-of-the-rings-gollum-seht-ihr-ringgeister-und-legolas-vater-1578404662017.jpg', 'image', 'gollum-image', 1);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (26, 'https://wegener-clan.de/media/sounds/gollum.mp3', 'sound', 'gollum-sound', 1);

INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (27, 'https://wegener-clan.de/media/videos/Frodo.mp4', 'video', 'bilbo-video', 2);
INSERT INTO CARD (ID, MEDIA_PATH, MEDIA_TYPE, NAME, CARD_PAIR_ID)
VALUES (28, 'https://img.welt.de/img/kultur/mobile111998501/1401355027-ci16x9-w1200/THE-HOBBIT-AN-UNEXPECTED-JOURNEY.jpg', 'image', 'bilbo-image', 2);

-- Erstellen des Star Wars Sets
INSERT INTO CARD_SET(ID, NAME, TAGS, PREVIEW_IMAGE_URL) VALUES (1,'Star Wars', 'Movie;SciFi;Space;War', 'https://wegener-clan.de/media/StarWars_Set/images/Episodei.png');

-- Erstellen des Harry Potter Sets
INSERT INTO CARD_SET(ID, NAME, TAGS, PREVIEW_IMAGE_URL) VALUES (2,'Harry Potter', 'Movie;Magic;Fantasy', 'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-goblet-of-fire-key-art.jpg.adapt.crop191x100.628p.jpg');

-- Erstellen des Herr der Ringe Sets
INSERT INTO CARD_SET(ID, NAME, TAGS, PREVIEW_IMAGE_URL) VALUES (3,'Herr der Ringe', 'Movie;Tolkin;Fantasy', 'https://images.cgames.de/images/gamestar/290/ringe-der-macht-teaser-neu_6168385.jpg');

-- Zuordnung der Start Wars Karten zu dem Star Wars Set
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,1);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,2);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,3);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,4);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,5);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,6);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,7);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,8);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,9);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,10);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,11);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,12);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,13);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,14);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,15);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,16);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,17);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,18);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,19);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(1,20);


-- Zuordnung der Harry Potter Karten zu dem Harry Potter Set
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(2,21);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(2,22);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(2,23);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(2,24);

-- Zuordnung der Herr der Ringe Karten zu dem Herr der Ringe Set
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(3,25);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(3,26);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(3,27);
INSERT INTO CARD_SET_CARDS(CARD_SET_ID,CARDS_ID) VALUES(3,28);





-- Insert Users
INSERT INTO users (username, password) VALUES
('artmaster123', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('streetking456', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('urbanartist789', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('citypainter101', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('graffitiqueen202', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('tagmaster303', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('sprayartist404', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('paintdesigner505', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('stylecreator606','$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO'),
('urbanlegend707', '$2b$10$zMo5C/fR7f5.SA3G9kFXAudeim3diP/jpZ4nVTH2eLahiGB/efKxO');
-- Insert Graffiti Posts (centered around Boulder, Colorado)
INSERT INTO graffiti_posts (user_id, image_url, description, latitude, longitude) VALUES
(1, 'https://media.timeout.com/images/105671264/1372/1029/image.jpg', 'Amazing street art in Boulder', 40.0150, -105.2705),
(2, 'https://th.bing.com/th/id/OIP.E_pysQsVc63cjTODHGUONQHaE7?rs=1&pid=ImgDetMain', 'Colorful mural on Pearl Street', 40.0189, -105.2775),
(3, 'https://th.bing.com/th/id/R.33a3734789fb62ffcc9b14cb9e987ef6?rik=%2bGRtPxIvA%2bIFVw&pid=ImgRaw&r=0', 'Abstract graffiti near CU campus', 40.0076, -105.2660),
(4, 'https://i.pinimg.com/originals/81/5a/3f/815a3fb71869a1d4ef511e0effb25b6b.jpg', 'Political statement through art', 40.0225, -105.2830),
(5, 'https://cdn.5280.com/2018/04/denver-graffiti-tour-1_mike-tish.jpg', 'Beautiful piece of urban art', 40.0090, -105.2720),
(6, 'https://th.bing.com/th/id/R.78223b337994dd41180ab2bd50ba6dc5?rik=3PBITHhagmW%2bBw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-3kfeN5idG0g%2fUtn_qYqvUjI%2fAAAAAAAACWQ%2fGpR2bkHxOPo%2fs1600%2fDSC_0369.JPG&ehk=IZNngVhIC%2f5QGY8IawPZfrZAHRSmKk4Wl%2fX7d7i9Zi0%3d&risl=&pid=ImgRaw&r=0', 'Stunning graffiti in an unexpected location', 40.0165, -105.2750),
(7, 'https://www.thediscoveriesof.com/wp-content/uploads/2019/06/Denver-69.jpg', 'Modern street art with a message', 40.0120, -105.2680),
(8, 'https://th.bing.com/th/id/R.64006b42caafa7e8f0762b62c70d804c?rik=SREnyqCGBIbUPg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-8mJZT1ymGa4%2fUtoFqrWaTJI%2fAAAAAAAACYA%2f-D9oBmIpzYM%2fs1600%2fDSC_0397.JPG&ehk=X7FMqogI0L9plEn1QzZoIb9iz%2bSAuCVHLDzY6pKXV%2fo%3d&risl=&pid=ImgRaw&r=0', 'Classic graffiti style with a twist', 40.0195, -105.2800),
(9, 'https://th.bing.com/th/id/R.e973a245e3427ed1f02d413d00f38cee?rik=lE%2fmo7xY4A5YlQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_LYNVGEXliZ4%2fTT5DeXPnsFI%2fAAAAAAAABgw%2fMA4QdFsCglU%2fs1600%2fgraffiti_wall_street_art_design.JPG&ehk=%2f2FkHNxDrwsTcAVorrlcWilLLFpfd7eEvm7MhYkXVzE%3d&risl=&pid=ImgRaw&r=0', 'Impressive mural covering the entire wall', 40.0080, -105.2700),
(10, 'https://th.bing.com/th/id/OIP.9adwwG5-O22LB2QZY2JshQHaE8?rs=1&pid=ImgDetMain', 'Minimalist graffiti with powerful impact', 40.0140, -105.2730),
(1, 'https://media.timeout.com/images/105671264/1372/1029/image.jpg', 'Another amazing piece in Boulder', 40.0170, -105.2760),
(2, 'https://th.bing.com/th/id/OIP.E_pysQsVc63cjTODHGUONQHaE7?rs=1&pid=ImgDetMain', 'Vibrant colors in this street art', 40.0110, -105.2690),
(3, 'https://th.bing.com/th/id/R.33a3734789fb62ffcc9b14cb9e987ef6?rik=%2bGRtPxIvA%2bIFVw&pid=ImgRaw&r=0', 'Graffiti that tells a story', 40.0205, -105.2815),
(4, 'https://i.pinimg.com/originals/81/5a/3f/815a3fb71869a1d4ef511e0effb25b6b.jpg', 'Urban art that changes the neighborhood', 40.0060, -105.2670),
(5, 'https://cdn.5280.com/2018/04/denver-graffiti-tour-1_mike-tish.jpg', 'Street art that captures Boulder''s spirit', 40.0130, -105.2740),
(6, 'https://th.bing.com/th/id/R.78223b337994dd41180ab2bd50ba6dc5?rik=3PBITHhagmW%2bBw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-3kfeN5idG0g%2fUtn_qYqvUjI%2fAAAAAAAACWQ%2fGpR2bkHxOPo%2fs1600%2fDSC_0369.JPG&ehk=IZNngVhIC%2f5QGY8IawPZfrZAHRSmKk4Wl%2fX7d7i9Zi0%3d&risl=&pid=ImgRaw&r=0', 'Graffiti that makes you think', 40.0180, -105.2780),
(7, 'https://www.thediscoveriesof.com/wp-content/uploads/2019/06/Denver-69.jpg', 'Street art that brightens the day', 40.0100, -105.2685),
(8, 'https://th.bing.com/th/id/R.64006b42caafa7e8f0762b62c70d804c?rik=SREnyqCGBIbUPg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-8mJZT1ymGa4%2fUtoFqrWaTJI%2fAAAAAAAACYA%2f-D9oBmIpzYM%2fs1600%2fDSC_0397.JPG&ehk=X7FMqogI0L9plEn1QzZoIb9iz%2bSAuCVHLDzY6pKXV%2fo%3d&risl=&pid=ImgRaw&r=0', 'Graffiti that transforms the space', 40.0155, -105.2715),
(9, 'https://th.bing.com/th/id/R.e973a245e3427ed1f02d413d00f38cee?rik=lE%2fmo7xY4A5YlQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_LYNVGEXliZ4%2fTT5DeXPnsFI%2fAAAAAAAABgw%2fMA4QdFsCglU%2fs1600%2fgraffiti_wall_street_art_design.JPG&ehk=%2f2FkHNxDrwsTcAVorrlcWilLLFpfd7eEvm7MhYkXVzE%3d&risl=&pid=ImgRaw&r=0', 'Street art that speaks to the community', 40.0095, -105.2710),
(10, 'https://th.bing.com/th/id/OIP.9adwwG5-O22LB2QZY2JshQHaE8?rs=1&pid=ImgDetMain', 'Graffiti that captures Boulder''s essence', 40.0160, -105.2755);

-- Insert Comments
INSERT INTO comments (user_id, graffiti_id, comment_text) VALUES
(2, 1, 'This is amazing!'),
(3, 1, 'Love the colors in this piece'),
(4, 2, 'Great work, keep it up!'),
(5, 2, 'This is my favorite graffiti in Boulder'),
(6, 3, 'The detail is incredible'),
(7, 3, 'I pass by this every day and it always brightens my day'),
(8, 4, 'The artist really captured the essence of Boulder'),
(9, 4, 'This is a masterpiece'),
(10, 5, 'I would love to know the story behind this piece'),
(1, 5, 'The technique used here is impressive'),
(2, 6, 'This is amazing!'),
(3, 6, 'Love the colors in this piece'),
(4, 7, 'Great work, keep it up!'),
(5, 7, 'This is my favorite graffiti in Boulder'),
(6, 8, 'The detail is incredible'),
(7, 8, 'I pass by this every day and it always brightens my day'),
(8, 9, 'The artist really captured the essence of Boulder'),
(9, 9, 'This is a masterpiece'),
(10, 10, 'I would love to know the story behind this piece'),
(1, 10, 'The technique used here is impressive'),
(2, 11, 'This is amazing!'),
(3, 11, 'Love the colors in this piece'),
(4, 12, 'Great work, keep it up!'),
(5, 12, 'This is my favorite graffiti in Boulder'),
(6, 13, 'The detail is incredible'),
(7, 13, 'I pass by this every day and it always brightens my day'),
(8, 14, 'The artist really captured the essence of Boulder'),
(9, 14, 'This is a masterpiece'),
(10, 15, 'I would love to know the story behind this piece'),
(1, 15, 'The technique used here is impressive');

-- Insert Favorites (Likes)
INSERT INTO favorites (user_id, graffiti_id) VALUES
(1, 2),
(1, 5),
(1, 8),
(2, 1),
(2, 4),
(2, 7),
(2, 10),
(3, 3),
(3, 6),
(3, 9),
(4, 2),
(4, 5),
(4, 8),
(5, 1),
(5, 4),
(5, 7),
(5, 10),
(6, 3),
(6, 6),
(6, 9),
(7, 2),
(7, 5),
(7, 8),
(8, 1),
(8, 4),
(8, 7),
(8, 10),
(9, 3),
(9, 6),
(9, 9),
(10, 2),
(10, 5),
(10, 8),
(1, 11),
(2, 12),
(3, 13);

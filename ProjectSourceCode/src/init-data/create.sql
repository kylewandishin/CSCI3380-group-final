-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Graffiti Posts Table
CREATE TABLE graffiti_posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT,
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Comments Table
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    graffiti_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (graffiti_id) REFERENCES graffiti_posts(id) ON DELETE CASCADE
);

-- Favorites Table (Many-to-Many Relationship)
CREATE TABLE favorites (
    user_id INT NOT NULL,
    graffiti_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, graffiti_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (graffiti_id) REFERENCES graffiti_posts(id) ON DELETE CASCADE
);

-- Graffiti Metadata Table
CREATE TABLE graffiti_metadata (
    graffiti_id INT PRIMARY KEY,
    view_count INT DEFAULT 0,
    report_count INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (graffiti_id) REFERENCES graffiti_posts(id) ON DELETE CASCADE
);

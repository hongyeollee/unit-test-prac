-- migrate:up
CREATE TABLE carts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_option_id INT NOT NULL,
    quantity INT NOT NULL,
    CONSTRAINT carts_users_fkey FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT carts_product_options_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE carts;

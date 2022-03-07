<?php


class EmailValidator
{
    /**
     * Check if provided email address is valid.
     *
     * @param string $email
     *
     * @return bool
     */
    public function isValid(string $email): bool
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }

        return false;
    }
}
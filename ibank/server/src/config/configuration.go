package config

import (
"log"

"libs/github.com/BurntSushi/toml"
)

const tomlConfigFile = "properties.toml"

// Represents database server and credentials
type Config struct {
	Server   string
	Database string
}

// Read and parse the configuration file
func (c *Config) Read() {
	if _, err := toml.DecodeFile(tomlConfigFile, &c); err != nil {
		log.Fatal(err)
	}
}
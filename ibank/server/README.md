# About
RESTful API to manage clients written in **Go** and uses **MongoDB** as storage

### Project structure

    ibank
    ├── bin                     # Libs bin files (In .gitignore)
    ├── pkg                     # Additionals libs files (In .gitignore)
    ├── src                     # Source files
    │   ├── config              # Application properties keeper
    │   ├── dao                 # Data access objects
    │   ├── model               # Models
    │   ├── service             # Services for storing and loading data
    │   ├── application.go      # Entry point for app
    │   └── libs                # Used libs (In .gitignore)
    ├── properties.toml         # Application properties
    └── README.md

### Dependencies

Parsing properties file - [TOML parser](http://github.com/BurntSushi/toml)
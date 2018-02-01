# About
RESTful API to manage clients written in **Go** and uses **MongoDB** as storage

### Project structure

    ibank
    ├── bin                     # Libs bin files (In .gitignore)
    ├── pkg                     # Additionals libs files (In .gitignore)
    ├── src                     # Source files
    │   ├── config              # Application properties keeper
    │   ├── controller          # HTTP requests processing
    │   ├── dao                 # Data access objects
    │   ├── model               # Models
    │   ├── service             # Services for storing and loading data
    │   ├── application.go      # Entry point for app
    │   └── libs                # Used libs (In .gitignore)
    └── README.md

### Dependencies

- Installed database MongoDB
- Client for database - [MongoDB](https://www.mongodb.com/) [driver](https://gopkg.in/mgo.v2)
- URL router and dispatcher - [gorilla/mux](https://github.com/gorilla/mux)
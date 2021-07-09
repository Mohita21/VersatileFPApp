# Web Portal for AI-based Tools for Fresh Produce Procurement Price Forecasting

The code for this Application is in two different repositories:
1. [Front End Angular CLI Application Code](https://github.com/Mohita21/VersatileFPApp)
2. [Back End Flask Application Code](https://github.com/Mohita21/Application_Backend)

## Installation
Install any IDE like PyCharm or Visual Studio Code to run the python fiels for serving the 
flask application backend code.

# Front End Angular CLI Application
This front end project is generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7. This project has the front-end code for the application, **Web Portal for AI-based Tools for
Fresh Produce Procurement Price Forecasting**.
### Description
This project has the following components:
- Yield: The component for forecasting yield.
- Price: The component for forecasting price.
- simcheck: The component for checking similarity between two time series.
- interpolation: The component for imputation of time series.
- linechart: The component for generating line chart on the web page.
- credits: The component for displaying credits.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Usage


Usage Case | Demonstration |
--- | --- | 
Accessing the web application main modules and their sub function | [DEMO](https://drive.google.com/file/d/1-qq7tB_gRA5vKEoJI1UaYQXC80P4fnnA/view?usp=sharing) | 
Imputing data files with random missing values and missing chunks | [DEMO](https://drive.google.com/file/d/1Wuf2P1eDXZap-0SHWL1T-ktGSOB_UAa4/view?usp=sharing) | 
Checking the binary and percentage similarity between two timeseries based on input, output, and relation of input to output parameters | [DEMO](https://drive.google.com/file/d/1jW792C7xWBWGZEW7px8OtpMiUUJAZaNq/view?usp=sharing) | 
Forecasting strawberry price 1 day ahead in Santa Maria using the Combined model | [DEMO](https://drive.google.com/file/d/1FT_z-0Xcl5FvRC9H5FMeJJhGnhCskTur/view?usp=sharing) | 
Forecasting Strawberry yield 1 week ahead in Santa Maria 1st July – 7th July 2019 using the Satellite images model | [DEMO](https://drive.google.com/file/d/14gK8pihbbIGbZwFNTUjRghPcpFp-Y7LO/view?usp=sharing) |
Forecasting Raspberry yield 2 weeks ahead in Santa Maria 1st July – 15th July 2019 using the Satellite images model (transfer learning is applied) | [DEMO](https://drive.google.com/file/d/1wAViRhblL9wrtIt1fm-DeDxVEUkkQhj_/view?usp=sharing) |
Forecasting Raspberry yield 3 weeks ahead in Santa Maria 1st July – 21st July 2019 using the Combined model (transfer learning is applied) | [DEMO](https://drive.google.com/file/d/1hAXYftOst2uNwX9Ga0gw3rpWtX7aQcCO/view?usp=sharing) |
Forecasting Blueberry yield 3 weeks ahead in Santa Maria 1st July – 21st July 2019 using the Satellite images model | [DEMO](https://drive.google.com/file/d/1pdedRBak-u3F1N1fPRfL8qfmaQ83j9Vq/view?usp=sharing) |

# Back End Flask Application Code

### Description
This part of code has the backend code for the Angular Application named 
**Web Portal for AI-based Tools for Fresh Produce Procurement Price Forecasting**. This application has two main functionalities:
- Data Preprocessing
- Forecasting

    **Data Preprocessing** has two sub-modules:
    - *Imputation:* This module helps in imputing the time series with missing values at random points or chunks of missing values.
    - *Similarity Check:* This module helps in finding similarity between two time series with detailed analysis.
    
    **Forecasting** has two sub-modules:
    - *Price Forecasting:* This module forecasts the price values using station-based, satellite-based and combined deep learning models.
    - *Yield Forecasting:* This module forecasts the yield values using station-based, satellite-based and combined deep learning models.

  


### Running the code
Run the *FlaskApp_Main.py* file in the Application folder to serve the Flask Application.

##### Directories
- Application: This has the main python file *FlaskApp_Main.py* for running the code.
- Data: This folder has the different datasets used for training and similarity check in the backend.
- Imputation: This folder has codes required for Imputation.
- SimilarityCodes: Here the codes for similarity check and analysis is present.
- StationCodes: Codes for Station Based forecasting, web scraping, data preprocessing, transfer learning are present.
- SatelliteCodes: Codes for the Satellite Based forecasting and transfer learning are present.
- StationTraining: This folder has codes for retraining the station based models.
- TrainingWeights, SatelliteModels, pcaWeights, sclrWeights: These folder have weights for the different models used in application.
- *client_secrets.json*, *mycreds.txt*: These files have credentials required for google drive authentication to access the satellite images.

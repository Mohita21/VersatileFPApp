# Web Portal for AI-based Tools for Fresh Produce Procurement Price Forecasting

## Description
This is a price forecasting web application which provides two main modules: one for data preprocessing and the second is for forecasting. 

#### Module 1: Data Preprocessing
This module has two submodules one for imputing missing values and the other for checking the similarity between two timeseries.
Imputation Option:
The Imputation submodule has two options: the first is applied in case of random missing values are encountered and the second in case the file has chunks of missing values.
- Random Missing 
- Missing Chunks
Similarity Check Option:
The similarity check module on the other hand can check the similarity needed for deciding the validity of the application of transfer learning among the crop forecasting models. The similarity check can be based on the similarity of the input parameters to the forecasting model (county conditions), the output parameters (yield or price), and the relationship between input and output.
- Input based (county conditions)
- Output Based (yield or price)
- Input-output based (relation of the county conditions to both yield and price)
#### Module 2: Forecasting FP yield and price 
- Station Based Models: used to forecast 5 weeks ahead since station data is daily updated. 
- Satellite Images Models: used to forecast 4 weeks ahead since station data is weekly updated.
- Ensemble Models Combining Station Based and Satellite Images Models: used to forecast 4 weeks ahead since station data is daily updated.

The [combined ensemble forecasting module](https://github.com/Mohita21/VersatileFPApp/blob/2d681427bbcf1f71f86e3098d196992978818818/Figures/The%20Proposed%20Solution.jpg) is the best performing module especially for forecasting strawberry prices in Santa Maria California for 5 weeks ahead; Sample output of the [five weeks ahead forecasted vs. true prices for July 2019](https://github.com/Mohita21/VersatileFPApp/blob/2d681427bbcf1f71f86e3098d196992978818818/Figures/SM%20Strawberry%20Price%205W.jpg).


## Installation

#### Requirements
Install any IDE like PyCharm or Visual Studio Code to run the python files for serving the 
flask application backend code.

The code for this application is aailable in two different repositories:
1. [Front End Angular CLI Application Code](https://github.com/Mohita21/VersatileFPApp)
2. [Back End Flask Application Code](https://github.com/Mohita21/Application_Backend)


#### Front End Angular CLI Application
This front end project is generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7. This project has the front-end code for the application, **Web Portal for AI-based Tools for Fresh Produce Procurement Price Forecasting**.

This project has the following components:
- Yield: The component for forecasting yield.
- Price: The component for forecasting price.
- simcheck: The component for checking similarity between two time series.
- interpolation: The component for imputation of time series.
- linechart: The component for generating line chart on the web page.
- credits: The component for displaying credits.


**Development Server**
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


#### Back End Flask Application Code

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

**Using satellite images:**  
1. The application, with access through an authenticated Google account, requests a set of satellite images for specified dates.
2. The requested images are uploaded onto the Google account's Google Drive.
3. The application then downloads the images from Google Drive and proceeds with processing and forecasting.

It should be noted that the GEE is used under the free license granted for non-profit educational and research institutions, commercial use would require obtaining the relevant license.

**Requesting and downloading satellite images:**  
- To be able to request and download satellite images from Google Earth Engine (GEE), authentication must be made through a Google account. A Google account is created with set API configurations to request images from GEE and download them from Google Drive.
- For initial setup, through the backend of the application software (Python), a function called "ee.Authenticate()" must be run which will redirect the user to a Google account sign-in page where the following email and password can be used to access the page that provides an authentication code that they must copy and paste into the Python terminal waiting for an input:

    - Email: app.gee.images@gmail.com

    - Password: images123

- An authentication token is then saved for future uses and the user no longer needs to use the "ee.Authenticate()" function.

**Running the code:**
Run the *FlaskApp_Main.py* file in the Application folder to serve the Flask Application.

**Directories**
- Application: This has the main python file *FlaskApp_Main.py* for running the code.
- Data: This folder has the different datasets used for training and similarity check in the backend.
- Imputation: This folder has codes required for Imputation.
- SimilarityCodes: Here the codes for similarity check and analysis is present.
- StationCodes: Codes for Station Based forecasting, web scraping, data preprocessing, transfer learning are present.
- SatelliteCodes: Codes for the Satellite Based forecasting and transfer learning are present.
- StationTraining: This folder has codes for retraining the station based models.
- TrainingWeights, SatelliteModels, pcaWeights, sclrWeights: These folder have weights for the different models used in application.
- *client_secrets.json*, *mycreds.txt*: These files have credentials required for google drive authentication to access the satellite images.



### Usage Cases

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

### Roadmap
Future releases should:
1. Overcome the current limitations faced by the Satellite images module:
    - The training for the satellite images TL models is limited to 2 years data to reduce run time. Even if more than 2 years data is uploaded, only the 2 latest years are used for training.
    - The application sometimes fails to download the images from google drive despite the soundness of the used code; restarting the application is needed to fix such issue.
2. Enhance the optimization of: 
    - The Similarity code module Similarity_Input_Output function and generating the pdfs in the detailed analysis. 
    - Downloading and processing satellite image for future forecasts.
3. Enhance the Robustness: 
    - The system validates all user inputs to avoid crashing wrong information; like entering end date beyond the 5 weeks horizon for 5 weeks ahead model.
    - The Similarity module code breaks in backend on generating the pdfs for time series.
4. The yield forecasting is considered as a tentative indication of the price but since [the yield is observed to fluctuate steeper than the price](https://github.com/Mohita21/VersatileFPApp/blob/2d681427bbcf1f71f86e3098d196992978818818/Figures/p%20vs%20y.jpg) and given that deep learning models are not the best in detecting such fluctuations, a potential future work is to improve the models’ ability to capture steep fluctuations. The best performing module sample output of the [five weeks ahead forecasted vs. fluctuating true yields for July 2019](https://github.com/Mohita21/VersatileFPApp/blob/2d681427bbcf1f71f86e3098d196992978818818/Figures/SM%20Strawberry%20Yield%205W.jpg) shows how the forecasted yield is much smoother than the true yield.
5. Efficiently generalizing the application using transfer learning to forecast yields and prices of FPs similar to strawberries with minimal retraining.


### Authors and acknowledgement
Warm thanks for the CPAMI researchers who have developed the current portal, which is the outcome of several Master and Doctoral theses. The researchers who contributed to the design and implementation of the web application are credited here:

**Analysis & Design:** Lobna Nassar, Mohita Chaudhary, Mohamed Sadok, Muhammad Saad, Fatemeh Jefri

**Implementation:**

The front-end or interface developed by Mohita using Angular CLI which includes HTML, CSS and TypeScript
The back end is developed by:
- Mohita Chaudhary: integrated system modules with front end and developed forecasting submodules based on station based & combined data using Python and Flask Framework
- Mohamed Sadok: developed forecasting submodules based on satellite images and combined data using Python 
- Fatemeh Jaafari: developed FP similarity module using Python  
- Muhammad Saad: developed Imputation module using Python


# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Purpose of this project
This project was designed to allow a user to book an interview in a specified timeslot on a given day. 

##Features 
upon loading this website the user will be greated by the first day of interviews. Here the user can see all the slot, some availible and some unavailible.
![image](https://user-images.githubusercontent.com/95982839/160932246-421e96ec-b106-4a30-8a34-0970532273bf.png)

The user can navigate to different days to see what is availible.
![image](https://user-images.githubusercontent.com/95982839/160932350-fbc0cb97-e220-44f6-bfef-42df0b0e7b5e.png)

Users can book interviews by clicking on an empty slot and then a form will appear which can be filled out. The user must input their name and the person they are going to interview with. If the user decides to not book the interview they can cancel, or if they would like to proceed they can confirm.
![image](https://user-images.githubusercontent.com/95982839/160932464-e19283cd-c70f-4b9e-b793-d774b57e8ab4.png)

Once confirmed the slot will now be populated with their information and the number of remaining spots for the day decreases.
![image](https://user-images.githubusercontent.com/95982839/160932744-2f9f5233-6ec5-4b9d-8505-9d4d8351fb04.png)

There are also a number of loading animations used during api calls to let the user know their request is being processed. 




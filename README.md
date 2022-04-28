# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Purpose of this project

Create an interview scheduler with React that allows users to book and cancel interviews. 

## Features 
Upon loading this website the user will be greeted by the first day of interviews. Here the user can see all availible and unavailble timeslots.
![image](https://user-images.githubusercontent.com/95982839/160932246-421e96ec-b106-4a30-8a34-0970532273bf.png)

The user can navigate to different days to see available time slots.
![image](https://user-images.githubusercontent.com/95982839/160932350-fbc0cb97-e220-44f6-bfef-42df0b0e7b5e.png)

Users can book interviews by clicking on an empty slot causing a form to appear. The user must input their name and the person they are going to interview with. If the user decides to not book the interview they can cancel, or if they would like to proceed they can confirm.
![image](https://user-images.githubusercontent.com/95982839/160932464-e19283cd-c70f-4b9e-b793-d774b57e8ab4.png)

Once confirmed, the slot will now be populated with their information and the number of remaining spots for the day decreases.
![image](https://user-images.githubusercontent.com/95982839/160932744-2f9f5233-6ec5-4b9d-8505-9d4d8351fb04.png)

There are also a number of loading animations used during api calls and error screens to let the user know their request is being processed or has failed.

If users want to edit or delete their requests they can simply click the buttons that appear when hovering over their interview slot. Edits will simply allow the user to change any info and will have their previous information populated. 
![image](https://user-images.githubusercontent.com/95982839/160933080-abc6a9d5-ed82-4c40-95fd-b185bc916817.png)

The delete function on the other hand will require the user to confirm the deletion before allowing it to happen.
![image](https://user-images.githubusercontent.com/95982839/160933244-354fc934-e7d2-4b48-b795-f8fabe5db3ab.png)

Once deleted the slot will now be free and the number of available spots will increase once again.
![image](https://user-images.githubusercontent.com/95982839/160933376-ca6ea811-49f7-4d51-aed4-ddd8e6bbd8b4.png)





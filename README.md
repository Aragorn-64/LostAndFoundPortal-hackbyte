# LostAndFoundPortal
## Lost and Found Portal submission for Hackbyte 2022

This is a Frontend Interface for a lost and found website generated for our college which includes frontend and UI for authorisation and listing of lost and find items in the college to prevent cluttering of lost and found mails in everyone's inbox.

## Technologies used: 
1. HTML
2. CSS 
3. Bootstrap

## Current page progress:
- Homepage with introduction and explaination of the Portal, it's benefits and Steps to use it
- Account Dashboard page 
- Lost and Found item listing page

## Planned Working: 
- User can access the Lost and Found listing freely, but needs to sign in with an intitute email id (.iiitmdj.ac.in) email using Google Sign in to access their dashboard
- Account dashboard that has 
  - Contact information updation
  - Notifications section for updates related to your lost and found claims
  - Options to create new Item listing
  - (?) A scoring / leaderboard for who loses/finds the most items
  - Status updates for pending Lost and Found claims of that user
- Item entry creation form with the following feilds:
  - Item discription ( (?) text split into tags for additonal functionality)
  - Entry type (lost or found)
  - Location
  - Date and Time
  - Optional Image upload 
- Lost and Found items listing page, where we can sort the displayed data on basis of time, location, etc and can search for items using tags (eg: "bottle") with a claim interaction button to submit a claim / report that you have found the item

## Todos and Future Plans:
- [ ] Create the Item Entry Form page
- [ ] Signin with Google id feature
- [ ] Implementing login based access control for various pages of the portal
- [ ] Implementing Firebase databases for storing details of Lost and Found item entries
- [ ] Using the stored data and displaying it in various sorting orders on the Item Listings page
- [ ] A text tags based item match suggestion system to match potential different entries of the same object

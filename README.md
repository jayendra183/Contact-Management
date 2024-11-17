# **Contact Management System**

A user-friendly Contact Management System built using **ReactJS**, **Node.js**, and **MongoDB**, allowing users to add, view, edit, and delete contact details efficiently.

NOTE: We can see new data after refreshing the tab.

---

## **Features**
- **Add Contacts**: Fill out a simple form to add new contacts with fields like name, email, phone, company, and job title.
- **View Contacts**: Display all saved contacts in a responsive table.
- **Edit Contacts**: Inline editing for specific fields like email, phone, company, and job title.
- **Delete Contacts**: Remove unwanted contacts with a single click.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.
- **Real-Time Updates**: Table updates instantly after any action (add, edit, or delete).

---

## **Technologies Used**
- **Frontend**: ReactJS, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## **Setup Instructions**

### Backend:
1. Navigate to the `backend` folder:
   ```bash
   cd backend
2. Install dependencies:
   ``` bash
   npm install
3. Create a `.env` file with:
   ``` bash
   MONGO_URI=mongodb://localhost:27017/contacts
   PORT=5000
4. Start the server:
   ``` bash
   node server.js
###Frontend:
1. Navigate to the `frontend` folder :
   ``` bash
   npm install
2. Install dependencies:
   ``` bash
   npm install
3. Start the React app:
   ``` bash
   npm start
   
## **API Endpoints**

| **Method** | **Endpoint**      | **Description**             |
|------------|-------------------|-----------------------------|
| `POST`     | `/contacts`       | Add a new contact           |
| `GET`      | `/contacts`       | Retrieve all contacts       |
| `PUT`      | `/contacts/:id`   | Update a contact by ID      |
| `DELETE`   | `/contacts/:id`   | Delete a contact by ID      |


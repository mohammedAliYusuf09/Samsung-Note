import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        {
            "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            "noteTitle": "Meeting Notes",
            "noteText": "Discuss project milestones and deadlines with the team. Ensure that everyone is clear on their tasks and deliverables. Set up follow-up meetings and check on any blockers that might hinder progress.",
            "noteDate": "Sep 11"
        },
        {
            "id": "b2c3d4e5-f678-9012-abcd-ef1234567890",
            "noteTitle": "Shopping List",
            "noteText": "Buy groceries for the week including milk, eggs, bread, and a variety of fresh vegetables. Don’t forget to check for any other essentials that might be running low, such as spices or canned goods.",
            "noteDate": "Sep 12"
        },
        {
            "id": "c3d4e5f6-7890-1234-abcd-ef1234567890",
            "noteTitle": "Book Recommendations",
            "noteText": "Consider reading 'The Catcher in the Rye' by J.D. Salinger and '1984' by George Orwell. These books offer profound insights into human nature and society. Maybe jot down your thoughts or favorite quotes as you read.",
            "noteDate": "Sep 13"
        },
        {
            "id": "d4e5f678-9012-3456-abcd-ef1234567890",
            "noteTitle": "Workout Plan",
            "noteText": "Start the day with a 5-mile run to boost your stamina and energy. In the evening, focus on strength training exercises such as weight lifting or resistance workouts. Incorporate stretching and cool-down exercises to prevent injury.",
            "noteDate": "Sep 14"
        },
        {
            "id": "e5f67890-1234-5678-abcd-ef1234567890",
            "noteTitle": "Project Ideas",
            "noteText": "Brainstorm new features to enhance the app’s functionality. Consider adding user-requested features and improving the user interface to make it more intuitive and engaging. Gather feedback from users to guide these improvements.",
            "noteDate": "Sep 15"
        },
        {
            "id": "f6789012-3456-7890-abcd-ef1234567890",
            "noteTitle": "Travel Plans",
            "noteText": "Book flights and accommodation for the upcoming vacation. Research various options to find the best deals and ensure all reservations are confirmed. Create a checklist of items to pack and any activities you want to do while traveling.",
            "noteDate": "Sep 16"
        },
        {
            "id": "90123456-7890-1234-abcd-ef1234567890",
            "noteTitle": "Dinner Menu",
            "noteText": "Prepare a delicious dinner consisting of pasta with garlic bread and a side salad. Consider trying a new pasta recipe or adding a special ingredient to make the meal more flavorful. Set the table nicely and maybe include a dessert to finish the meal.",
            "noteDate": "Sep 17"
        },
        {
            "id": "01234567-8901-2345-abcd-ef1234567890",
            "noteTitle": "Holiday Gift Ideas",
            "noteText": "Brainstorm and list potential gifts for family and friends. Think about each person’s interests and needs. Make a shopping list with ideas and prioritize the most meaningful or necessary items to buy. Keep track of what you’ve already purchased.",
            "noteDate": "Sep 18"
        },
        {
            "id": "12345678-9012-3456-abcd-ef1234567890",
            "noteTitle": "Weekend Plans",
            "noteText": "Plan a visit to the park for a relaxing day out. Pack a picnic with your favorite snacks and drinks. Check the weather forecast to ensure it will be pleasant, and consider any outdoor games or activities to enjoy while there.",
            "noteDate": "Sep 19"
        },
        {
            "id": "23456789-0123-4567-abcd-ef1234567890",
            "noteTitle": "Book Club",
            "noteText": "Prepare for the next book club meeting by reading chapters 3 to 5 of the current book. Take notes on key themes, characters, and plot points. Formulate discussion questions and consider different perspectives to share with the group.",
            "noteDate": "Sep 20"
        },
        {
            "id": "34567890-1234-5678-abcd-ef1234567890",
            "noteTitle": "Home Improvement",
            "noteText": "Address home maintenance tasks including repairing the leaky faucet and painting the living room. Gather all necessary tools and materials. Plan the steps required for each task and allocate enough time to complete them effectively.",
            "noteDate": "Sep 21"
        },
        {
            "id": "45678901-2345-6789-abcd-ef1234567890",
            "noteTitle": "Daily Reflections",
            "noteText": "Reflect on the day’s achievements and challenges. Take a moment to appreciate your accomplishments and identify areas for improvement. Set goals and plan for the next day to continue building on today’s progress.",
            "noteDate": "Sep 22"
        }
    ],
    recycle: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action) {
            state.notes.push(action.payload);
        },
        deleteNotes(state, action) {
            const notesToDelete = action.payload;
            const idsToDelete = notesToDelete.map(note => note.id);
            state.notes = state.notes.filter(note => !idsToDelete.includes(note.id));
        },
        addOnRecycle(state, action) {
            state.recycle.push(...action.payload)
        },
        deleteRecycle(state, action){
            const RecycleToDelete = action.payload;
            const idsToDelete = RecycleToDelete.map(note=> note.id);
            state.recycle = state.recycle.filter(note=> !idsToDelete.includes(note.id));
        },
        recycleNotes(state, action){
            state.notes.push(...action.payload);
        },
        deleteAllRecycle(state){
            state.recycle = [];
        },
        allRecycleToHome(state, action){
            state.notes = state.notes.concat(action.payload);
        },
        editNoteTitle(state, action){
            const editId = action.payload.id;
            state.notes.map((item)=>{
                if(item.id === editId){   
                item.noteTitle = action.payload.noteTitle;
                }
            })
        },
        editNoteText(state, action){
            const editId = action.payload.id;
            state.notes.map((item)=>{
                if(item.id === editId){   
                item.noteText = action.payload.noteText;
                }
            })
        }
    }
})




export default notesSlice.reducer;
export const { addNote, deleteNotes, addOnRecycle, deleteRecycle, recycleNotes, deleteAllRecycle, allRecycleToHome, editNoteTitle, editNoteText } = notesSlice.actions;
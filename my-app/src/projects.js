import weather from "./videos/weather.webm"
import note  from"./videos/note.webm"
import passwordGen from "./videos/passwordGen.webm"
import social from "./videos/social.webm"
import quiz from "./videos/quiz.webm"
import study from "./videos/StudyHelper.webm"
const projects = [{

    title:"Study Helper",
    descripton:" This applicaiton was designed to help sutdents study aswell as give teachers a fun way to engae with ther students. This application uses and apollo server aswell as mongosse atlas integration with heroku to create a full stack application. A user has the ability to browse pre-made quizes from grades 1-3. The user must be loged in to use any of this content. This is achived by assigned a token to each user apon login. The user can also create thier own quizes and save them to the database. The user can then search for there newly created quiz by title to begin taking th quiz. This feature was added for teachers to be able to create cutom quizes for there classroom. ",
    webpagelink:"https://safe-ridge-06648.herokuapp.com/",
    githublink:"https://github.com/connorbottone/StudyHelper.git",
    video:study,},

    { title:"City weather tracker",
descripton:"This webpage is designed to find the weather in user inputed city name.Upon search of desiered city the user will be presented withThe date,An icon representation of weather conditions,The temperature,The humidity,And the wind speed.All of this data will be displayed for the present day and for the following 5 days to come.All past searches are sotred and listed under the search bar.The user can click on one of there past searched options to be presented with that weather info agian. All weather icons are animated upon hover.",
webpagelink:"https://connorbottone.github.io/City-Weather-Tracker/",
githublink:"https://github.com/connorbottone/City-Weather-Tracker.git",
video:weather,




},
{
title:"Password Generator",
descripton:"This web application was designed to generate a random password based on user-selected criteria. The user can fine-tune the length of their desired password as well as choose between Capital letters Lowercase letters Special characters And Numbers to be included within the generated password.If the user enters a desierd password length>8 and <128 or enters a value in text fromat the user will be prompted to reenter there desired length.",
webpagelink:"https://connorbottone.github.io/Genpass/",
githublink:"https://github.com/connorbottone/Genpass.git",
video:passwordGen,
},
{
    title:"Note Taker",
    descripton:"This web application was designed to allow the user to create, save, and delete notes. The user can create a new note by clicking the pencil icon in the top right corner of the screen. The user can then enter a title and text for their note. Once the user has entered a title and text for their note they can save the note by clicking the save icon in the top right corner of the screen. The user can then view their saved notes by clicking the note title in the left hand column of the screen. The user can delete a note by clicking the trash can icon next to the note title in the left hand column of the screen.",
    webpagelink:"https://cbottone-personal-note-taker.herokuapp.com/",
githublink:"https://github.com/connorbottone/personal-note-taker.git",
video:note,
},
{
title:"States and Capitals Quiz",
descripton:"This website provides users with a 6 question long quiz on States and ther Capitols.The user has 60 seconds to complete the game.If the user select the correct answer the messege great job will be displayed.If incorrect the message sorry thats incorect will be displayed and 10 seconds will be deduced from the remaing time.Once the user is finshed with all the quesions or the time is up the user will be prompted to enter there initals to be stored on the highscore leaderboards.",
webpagelink:"https://connorbottone.github.io/P3Quiz-repo/",
githublink:"https://github.com/connorbottone/P3Quiz-repo.git",
video:quiz,
},
{
title:"Back-End Social-Network-orginizer",
descripton:"This application was designed to manage a soical media platform on the back end. Thhe routes designed within this project give a user the ability to add or remove a profile, add and remove freinds, add or remove thoughts, and add or remove reactions to thoughts. The user can also update a profile, add or remove a friend, add or remove a reaction, and add or remove a thought. The user can also get all users, get a user by id, get all friends, get all thoughts, get a thought by id, and get all reactions.",
githublink:"https://github.com/connorbottone/Social-Network-orginization.git",
video:social,
}
]
export  {projects};
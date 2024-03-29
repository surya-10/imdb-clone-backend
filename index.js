import express from "express";
import { client } from "./mongo-connection/connection.js";
import actorRouter from "./routes/addActors.js";
import producerRouter from "./routes/addProducer.js";
import reviewRouter from "./movieReviewRouter/addReview.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

let app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use("/actor", actorRouter)
app.use("/producer", producerRouter);
app.use("/movie", reviewRouter);

let port = process.env.port;

app.get("/", (req, res)=>res.send("Welcome"));

app.listen(port, ()=>{
    console.log("Server connected");
});




// let a = [
//     {
//       "Name": "Rajinikanth",
//       "Gender": "Male",
//       "DOB": "12-12-1950",
//       "Bio": "Rajinikanth, born on December 12, 1950, is an iconic Indian actor and cultural phenomenon, primarily working in Tamil cinema. Making his debut in Apoorva Raagangal (1975), Rajinikanth rose to superstardom with his larger-than-life roles and unique style. His breakthrough came with Bhairavi (1978), and he became a household name with Billa (1980) and Thee (1981). Rajinikanth is known for his charismatic screen presence, trademark dialogues, and gravity-defying stunts. Fondly called Thalaivar (leader) by his fans, he has a massive following worldwide. Besides acting, Rajinikanth has also ventured into politics and philanthropy, leaving an indelible mark on Indian cinema and society."
//     },
//     {
//       "Name": "Kamal Haasan",
//       "Gender": "Male",
//       "DOB": "07-11-1954",
//       "Bio": "Kamal Haasan, born on November 7, 1954, is a legendary Indian actor, filmmaker, and politician, primarily known for his work in Tamil cinema. He made his acting debut as a child artist in the film Kalathur Kannamma (1959) and later gained recognition with his breakthrough role in the film Apoorva Raagangal (1975). Kamal Haasan has since delivered numerous critically acclaimed performances in a wide range of roles, earning him the title 'Ulaga Nayagan' (Universal Hero). He is known for his versatility, innovative storytelling, and commitment to social causes. In addition to acting, Kamal Haasan has directed and produced several successful films and is actively involved in politics. He is respected as one of the most influential figures in Indian cinema."
//     },
//     {
//       "Name": "Vijay",
//       "Gender": "Male",
//       "DOB": "22-06-1974",
//       "Bio": "Vijay, born Joseph Vijay Chandrasekhar on June 22, 1974, is a renowned Indian actor primarily known for his work in Tamil cinema. Making his acting debut in the 1984 film Vetri, Vijay gained recognition with his breakthrough role in Poove Unakkaga (1996). Since then, he has starred in numerous successful films, cementing his status as a leading actor in the industry. Vijay is celebrated for his charismatic screen presence, versatile acting skills, and dedication to his craft. With a massive fan following, Vijay continues to be one of the most influential figures in the Indian film industry."
//     },
//     {
//       "Name": "Ajith Kumar",
//       "Gender": "Male",
//       "DOB": "01-05-1971",
//       "Bio": "Ajith Kumar, born on May 1, 1971, is a prominent Indian actor primarily known for his work in Tamil cinema. Making his debut in the film Prema Pusthakam (1992), Ajith gained recognition with his breakthrough role in Amaravathi (1993). Since then, he has starred in numerous successful films, showcasing his versatility and talent as an actor. Ajith is admired for his intense screen presence, dedication to his craft, and contributions to the film industry. With a dedicated fan base, he continues to be one of the leading actors in South Indian cinema."
//     },
//     {
//       "Name": "Prabhas",
//       "Gender": "Male",
//       "DOB": "23-10-1979",
//       "Bio": "Prabhas, born on October 23, 1979, is an Indian actor who primarily works in Telugu cinema. He made his acting debut in the film Eeswar (2002) and gained nationwide recognition with his role in the blockbuster film Varsham (2004). Prabhas achieved international fame with his portrayal of the titular character in the Baahubali series (2015-2017), which became the highest-grossing Indian film franchise of all time. Known for his dedication to his roles and his impressive physique, Prabhas is one of the highest-paid actors in the Indian film industry."
//     },
//     {
//       "Name": "Mahesh Babu",
//       "Gender": "Male",
//       "DOB": "09-08-1975",
//       "Bio": "Mahesh Babu, born on August 9, 1975, is an Indian actor, producer, and philanthropist who primarily works in Telugu cinema. He made his acting debut as a child artist in the film Needa (1979) and gained widespread acclaim with his lead role in the film Rajakumarudu (1999). Mahesh Babu is known for his charismatic screen presence, intense performances, and dedication to his craft. He has won numerous awards, including several Filmfare Awards, and is one of the highest-paid actors in the Telugu film industry."
//     },
//     {
//       "Name": "Allu Arjun",
//       "Gender": "Male",
//       "DOB": "08-04-1983",
//       "Bio": "Allu Arjun, born on April 8, 1983, is an Indian actor who primarily works in Telugu cinema. He made his acting debut in the film Gangotri (2003) and gained widespread recognition with his performances in films such as Arya (2004), Bunny (2005), and Desamuduru (2007). Allu Arjun is known for his stylish looks, energetic dance moves, and versatile acting skills. He has won several awards, including five Filmfare Awards South, and is one of the most popular and highest-paid actors in the Telugu film industry."
//     },
//     {
//       "Name": "Jr. NTR",
//       "Gender": "Male",
//       "DOB": "20-05-1983",
//       "Bio": "Jr. NTR, born on May 20, 1983, is an Indian actor, playback singer, and television personality who primarily works in Telugu cinema. He made his acting debut as a child artist in the film Brahmarshi Viswamitra"
//     },
//     {
//         "Name": "Akshay Kumar",
//         "Gender": "Male",
//         "DOB": "09-09-1967",
//         "Bio": "Akshay Kumar, born on September 9, 1967, is an Indian actor, producer, martial artist, and television personality who primarily works in Hindi cinema. He made his acting debut in the film Saugandh (1991) and gained recognition with his performances in action films such as Khiladi (1992) and Mohra (1994). Akshay Kumar is known for his versatility and has appeared in a wide range of genres, including comedy, drama, and romance. He is one of the most bankable stars in the Indian film industry and has won numerous awards, including the National Film Award for Best Actor."
//       },
//       {
//         "Name": "Shah Rukh Khan",
//         "Gender": "Male",
//         "DOB": "02-11-1965",
//         "Bio": "Shah Rukh Khan, born on November 2, 1965, is an Indian actor, film producer, and television personality who is widely regarded as the 'King of Bollywood.' He made his acting debut in the television series Fauji (1988) and gained recognition with his breakthrough role in the film Deewana (1992). Shah Rukh Khan has since appeared in numerous critically acclaimed and commercially successful films, earning him numerous awards, including the Padma Shri and multiple Filmfare Awards. Known for his charming persona and intense performances, he is one of the most popular and influential actors in Indian cinema."
//       },
//       {
//         "Name": "Aamir Khan",
//         "Gender": "Male",
//         "DOB": "14-03-1965",
//         "Bio": "Aamir Khan, born on March 14, 1965, is an Indian actor, director, and producer who is often referred to as the 'Mr. Perfectionist' of Bollywood. He made his acting debut in the film Holi (1984) and gained recognition with his breakthrough role in the film Qayamat Se Qayamat Tak (1988). Aamir Khan has since appeared in numerous critically acclaimed and commercially successful films, including Lagaan (2001), Rang De Basanti (2006), and Dangal (2016). Known for his dedication to his roles and his commitment to social causes, he is one of the most respected and influential figures in Indian cinema."
//       },
//       {
//         "Name": "Salman Khan",
//         "Gender": "Male",
//         "DOB": "27-12-1965",
//         "Bio": "Salman Khan, born on December 27, 1965, is an Indian actor, producer, singer, and television personality who is one of the most popular and influential figures in Bollywood. He made his acting debut in the film Biwi Ho To Aisi (1988) and gained recognition with his breakthrough role in Maine Pyar Kiya (1989). Salman Khan has since appeared in numerous commercially successful films, including Hum Aapke Hain Koun..! (1994), Bajrangi Bhaijaan (2015), and Sultan (2016). Known for his charismatic persona and larger-than-life roles, he is often referred to as 'Bhai' by his fans."
//       },
//       {
//         "Name": "Hrithik Roshan",
//         "Gender": "Male",
//         "DOB": "10-01-1974",
//         "Bio": "Hrithik Roshan, born on January 10, 1974, is an Indian actor, dancer, and film producer who is widely regarded as one of the most attractive male celebrities in India. He made his acting debut in the film Kaho Naa... Pyaar Hai (2000) and gained recognition with his breakthrough role in the same film, for which he won the Filmfare Award for Best Actor. Hrithik Roshan has since appeared in numerous critically acclaimed and commercially successful films, including Koi... Mil Gaya (2003), Dhoom 2 (2006), and War (2019). Known for his versatility and his ability to perform difficult dance sequences with ease, he is one of the highest-paid actors in Bollywood."
//       },
//       {
//         "Name": "Ajay Devgn",
//         "Gender": "Male",
//         "DOB": "02-04-1969",
//         "Bio": "Ajay Devgn, born on April 2, 1969, is an Indian actor, director, and producer who is known for his work in Hindi cinema. He made his acting debut in the film Phool Aur Kaante (1991) and gained recognition with his performance in the same film, for which he won the Filmfare Award for Best Male Debut. Ajay Devgn has since appeared in numerous critically acclaimed and commercially successful films, including Dilwale (1994), Hum Dil De Chuke Sanam (1999), and Singham (2011). Known for his intense performances and his versatility as an actor, he is one of the most respected figures in Bollywood."
//       },
//       {
//         "Name": "Amitabh Bachchan",
//         "Gender": "Male",
//         "DOB": "11-10-1942",
//         "Bio": "Amitabh Bachchan, born on October 11, 1942, is an Indian actor, film producer, television host, and former politician who is widely regarded as one of the greatest actors in the history of Indian cinema. He made his acting debut in the film Saat Hindustani (1969) and gained recognition with his breakthrough role in the film Zanjeer (1973). Amitabh Bachchan has since appeared in numerous critically acclaimed and commercially successful films, including Sholay (1975), Deewaar (1975), and Piku (2015). Known for his deep baritone voice and his powerful performances, he is often referred to as the 'Shahenshah of Bollywood.'"
//       },
//       {
//         "Name": "Dhanush",
//         "Gender": "Male",
//         "DOB": "28-07-1983",
//         "Bio": "Dhanush, born on July 28, 1983, is an Indian actor, producer, director, writer, lyricist, and playback singer who primarily works in Tamil cinema. He made his acting debut in the film Thulluvadho Ilamai (2002) and gained recognition with his performance in the critically acclaimed film Aadukalam (2011), for which he won the National Film Award for Best Actor. Dhanush has since appeared in numerous successful films, including Raanjhanaa (2013), VIP (2014), and Asuran (2019). Known for his versatility and unconventional choice of roles, he is one of the most talented and respected actors in the Tamil film industry."
//       },
//       {
//         "Name": "Vikram",
//         "Gender": "Male",
//         "DOB": "17-04-1966",
//         "Bio": "Vikram, born on April 17, 1966, is a highly acclaimed Indian actor primarily working in Tamil cinema. He made his acting debut in the film En Kadhal Kanmani (1990) and gained recognition for his performances in films such as Sethu (1999) and Pithamagan (2003). Vikram is known for his versatility and ability to portray diverse roles with depth and authenticity. He has won numerous awards, including several Filmfare Awards and a National Film Award for Best Actor for his role in Pithamagan. Vikram's commitment to his craft and his willingness to undergo physical transformations for his roles have earned him widespread acclaim and admiration. With a dedicated fan base, he continues to be one of the most respected actors in the Indian film industry."
//       },
//       {
//         "Name": "Sivakarthikeyan",
//         "Gender": "Male",
//         "DOB": "17-02-1985",
//         "Bio": "Sivakarthikeyan, born on February 17, 1985, is an Indian actor, playback singer, and television presenter who primarily works in Tamil cinema. He made his acting debut in the film Marina (2012) and gained recognition with his performances in films such as Ethir Neechal (2013), Varuthapadatha Valibar Sangam (2013), and Remo (2016). Sivakarthikeyan is known for his comedic timing, youthful charm, and ability to connect with the audience. He has won several awards, including the Tamil Nadu State Film Award for Best Actor for his role in Varuthapadatha Valibar Sangam. With a growing fan base, he is one of the rising stars in the Tamil film industry."
//       },
//       {
//         "Name": "Vijay Sethupathi",
//         "Gender": "Male",
//         "DOB": "16-01-1978",
//         "Bio": "Vijay Sethupathi, born on January 16, 1978, is an Indian actor, producer, and screenwriter who primarily works in Tamil cinema. He made his acting debut in the film Thenmerku Paruvakaatru (2010) and gained recognition with his performances in films such as Pizza (2012), Naduvula Konjam Pakkatha Kaanom (2012), and Soodhu Kavvum (2013). Vijay Sethupathi is known for his versatility and ability to portray a wide range of characters with authenticity. He has won several awards, including the Filmfare Award for Best Actor for his role in 96 (2018). With his unconventional looks and natural acting style, he has become one of the most sought-after actors in the Tamil film industry."
//       },
//       {
//         "Name": "Suriya",
//         "Gender": "Male",
//         "DOB": "23-07-1975",
//         "Bio": "Suriya, born on July 23, 1975, is a renowned Indian actor primarily working in Tamil cinema. He made his acting debut in the film Nerukku Ner (1997) and gained recognition with his breakthrough role in Nandha (2001). Since then, he has delivered numerous critically acclaimed performances in films such as Kaakha Kaakha (2003), Ghajini (2005), Vaaranam Aayiram (2008), and the Singam series. Known for his versatility, Suriya has portrayed a wide range of characters, showcasing his acting prowess and dedication to his craft. He is also involved in various philanthropic activities through his Agaram Foundation. With a massive fan following, Suriya continues to be one of the leading actors in the Tamil film industry."
//       }   
    
// ]  
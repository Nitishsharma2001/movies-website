import image from './assets/tb.jpg'
import bhul from './assets/bhoolbhulayia.jpg'
import drishyam from './assets/drishyam 2.jpg'
import brahm from './assets/brahmstra.jpg'
import billo from './assets/billo.jpg'
import galwakdi from './assets/galwakdi.jpg'
import khao from'./assets/khao.jpg';
import maadaladla from './assets/maadaladla.jpg'
import mm from './assets/mm.jpg'
import tw from './assets/12th.jpg'
import salaar from './assets/salaar.jpg'
import carryon from './assets/carryon.jpg'
import kep1 from './assets/kapilep1.jpg'
import lekh from './assets/lekh.jpg' 


var data = [{ id:1,ttl:"K.G.F: Chapter 1",tb: image, url : `https://drive.google.com/file/d/1k5VeCfCzzdFYQcRKdzlJrY_hI-OwdV11/preview`, des: `In the film, Rocky, a high-ranking mercenary, working for a prominent gold mafia in Bombay, seeks power and wealth in order to fulfill his mother's promise. Due to his high fame, the leaders of the gold mafia where he works hire him to assassinate Garuda, the son of the founder of Kolar Gold Fields.` },
{ id:2, ttl:"Drishyam 2",tb: drishyam, url: `https://drive.google.com/file/d/1CP8j_sASqy4aEq8_PkOELF17yQpUInqp/preview`, des: `Drishyam 2 (transl. Visual 2) is a 2022 Indian Hindi-language crime thriller film directed and co-produced by Abhishek Pathak. It is a remake of the 2021 Malayalam film of the same name and a sequel to the 2015 film Drishyam. It was jointly produced by Panorama Studios, Viacom18 Studios, and T-Series Films.` },
{ id:3, ttl:"Brahmāstra: Part One – Shiva",tb: brahm, url: `https://drive.google.com/file/d/1LS2v8TtuALFKSwQ-M3JTILTV5j8U4r-R/preview`, des: `Brahmāstra: Part One – Shiva (pronounced [bɾəɦmaːstrə]) is a 2022 Indian Hindi-language fantasy action-adventure film written and directed by Ayan Mukerji, dialogues written by Hussain Dalal and produced by Karan Johar, Apoorva Mehta, Hiroo Yash Johar, Namit Malhotra and Mukerji (in his debut production) ` },
{ id:4, ttl:"Bhool Bhulaiyaa",tb: bhul, url: `https://drive.google.com/file/d/1ljEuucDLNKbIAD5Wi5UxgObw05ESZLgL/preview`, des: `An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.` },
{ id:5, ttl:"Beautiful Billo",tb: billo, url: `https://drive.google.com/file/d/11FvM5P6yCxJB_PVpDDNC2AbVrk38L3YH/preview`, des: `A pregnant Punjabi woman lives in an empty house in the UK. However, chaos ensues when a newly-wed couple moves into the same mansion.` },
{ id:6, ttl:"Galwakdi",tb: galwakdi, url: `https://drive.google.com/file/d/1_CwajZh1dmWLnqEYuyew6Wz4MMyU4WX0/preview`, des: `Jagteshwar, a librarian with OCD, is well-accepted at home and in his workplace. However, when a free-spirited woman named Amberdeep enters his life, he slowly starts to change his views on life.` },
{ id:7, ttl:"Khaao Piyo Aish Karo",tb: khao, url: `https://drive.google.com/file/d/106Kd3eWxbwiRGpwOx10PBKTp_7cuV21j/preview`, des: `Cousins Jeeta and Mitha get into occasional conflicts due to their contrasting values and lifestyles. However, situations turn erratic when one of them commits a blunder.` },
{ id:8, ttl:"Maa Da Ladla",tb: maadaladla, url: `https://drive.google.com/file/d/106Kd3eWxbwiRGpwOx10PBKTp_7cuV21j/preview`, des: `When her son longs for a father figure in his life, Sehaj, a single mother, hires Gora, a struggling actor, to act as the father. Soon, the drama leads to hilarious situations and emotional bonds.` },
{ id:9, ttl:"Mission Majnu",tb: mm, url: `https://drive.google.com/file/d/1TIGdErM_dXhxjnuxZlg7Nq6lxfZXot4u/preview`, des: `Amid the Indo-Pakistani War of 1971, a RAW agent enters Pakistan to prove the country's complicity in nuclear weapons. To succeed, he must alert his nation and avoid an attack on the wrong location.` },
{ id:10, ttl:"12th Fail",tb: tw, url: `https://drive.google.com/file/d/1GvYgwQf0eRSnnRVYmmN484Zh3nkblvaM/preview`, des: `IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.` },
{ id:11, ttl:"Salaar: Part 1 – Ceasefire",tb: salaar, url: `https://drive.google.com/file/d/18McPDwxcmmtqMNx3I6b6d5P4oILV08Vr/preview`, des: `The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.` },
{ id:12, ttl:"Carry on Jatta 3",tb: carryon, url: `https://drive.google.com/file/d/18c4qdl3laETWuN8hcGxcr_6uoNvX4HRZ/preview`, des: `Dhillon's son, Jass, is in love with Meet. However, Meet's brothers get into a heated argument with Dhillon, whereupon Dhillon rejects his son's wish to marry Meet. Jass hatches a crazy plan to change his father's mind.` },
{ id:13, ttl:"The Great Indian Kapil Show",tb: kep1, url: `https://drive.google.com/file/d/1g078hHjYARCp2PUP22ed2j_U1QFrbiNw/preview`, des: `New Delhi: India's most-loved standup comedian Kapil Sharma is back with his show 'The Great Indian Kapil Show', this time not on television but on streaming giant Netflix. The show, like its television edition, has the same cast with a few exceptions.` },
{ id:14, ttl:"Lekh",tb: lekh, url: `https://drive.google.com/file/d/1sCCU5PBegXJgpysW_xr7KMvr8i2VIGel/preview`, des: `Circumstances cause two teenage lovers to drift apart only to be brought together again by fate as adults. It leads them to reflect on their relationship and what destiny means.` }
]


export default data
import User from "../models/User.js";
import sendEmail from "../config/sendEmail.js";
import emailTemplate from "../config/emailTemplate.js";
function listToString(list) {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += list[i];
        if (i < list.length - 1) {
            str += ", ";
        }
    }
    return str;
}
export const sendHelpEmail = async (district, bloodType,name,description) => {
    const users=await User.find({isEmailConfirmed:true,district,bloodType}).limit(50)
    const emailList=[]
    users.map(user=>{
        emailList.push(user.email)
    })
    if (emailList.length>0){
        await sendEmail({
            email: listToString(emailList),
            subject: `${name} need your Help with ${bloodType} Blood`,
            html: emailTemplate(`${name} needs your Help with ${bloodType} Blood`,
                `${name} from ${district} is counting on you for ${bloodType} blood! The requester has this to say,
        "${description}"`)
        })
    }

}
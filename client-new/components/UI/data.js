export const districts=[ "achham", "arghakhanchi", "baglung", "baitadi", "bajhang", "bajura", "banke", "bara", "bardiya", "bhaktapur", "bhojpur", "chitwan", "dadeldhura", "dailekh", "dang deukhuri", "darchula", "dhading", "dhankuta", "dhanusa", "dholkha", "dolpa", "doti", "gorkha", "gulmi", "humla", "ilam", "jajarkot", "jhapa", "jumla", "kailali", "kalikot", "kanchanpur", "kapilvastu", "kaski", "kathmandu", "kavrepalanchok", "khotang", "lalitpur", "lamjung", "mahottari", "makwanpur", "manang", "morang", "mugu", "mustang", "myagdi", "nawalparasi", "nuwakot", "okhaldhunga", "palpa", "panchthar", "parbat", "parsa", "pyuthan", "ramechhap", "rasuwa", "rautahat", "rolpa", "rukum", "rupandehi", "salyan", "sankhuwasabha", "saptari", "sarlahi", "sindhuli", "sindhupalchok", "siraha", "solukhumbu", "sunsari", "surkhet", "syangja", "tanahu", "taplejung", "terhathum", "udayapur" ]
export const bloodType=['A+','A-','B+','B-','C-','C+','O+','O-','AB+','AB-']
export const turnIntoSelectFormat=(data)=> {
    return data.map(d => ({
        "value": d,
        "label": d.charAt(0).toUpperCase() + d.slice(1)
    }))
}
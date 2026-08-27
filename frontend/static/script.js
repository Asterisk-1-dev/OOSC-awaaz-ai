// --- Comprehensive India States & Districts Data ---
const indiaData = {
  "Andaman and Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
  "Andhra Pradesh": ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "Y.S.R. Kadapa"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "South Salmara-Mankachar", "Sonitpur", "Tinsukia", "Udalguri", "West Karbi Anglong"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Manendragarh-Chirmiri-Bharatpur", "Mohla-Manpur-Ambagarh Chowki", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sakti", "Sarangarh-Bilaigarh", "Sukma", "Surajpur", "Surguja"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Dadra and Nagar Haveli", "Daman", "Diu"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jammu and Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Ladakh": ["Kargil", "Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "Eastern West Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"],
  "Nagaland": ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
  "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Dholpur", "Didwana-Kuchaman", "Dudu", "Dungarpur", "Ganganagar", "Gangapur City", "Hanumangarh", "Jaipur", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Jodhpur Rural", "Karauli", "Kekri", "Khairthal-Tijara", "Kota", "Kotputli-Behror", "Nagaur", "Neem Ka Thana", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur"],
  "Sikkim": ["East Sikkim", "North Sikkim", "Pakyong", "Soreng", "South Sikkim", "West Sikkim"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hanamkonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

// --- Comprehensive State Portals & Legal Aid Directory ---
const statePortals = {
  "Andhra Pradesh": { legalAid: "https://apslsa.ap.nic.in/", rti: "https://www.rtionline.ap.gov.in/", grievance: "https://meekosam.ap.gov.in/" },
  "Assam": { legalAid: "https://slsa.assam.gov.in/", rti: "https://rti.assam.gov.in/", grievance: "https://assam.gov.in/" },
  "Bihar": { legalAid: "https://patnahighcourt.gov.in/bslsa/", rti: "https://rtionline.bihar.gov.in/", grievance: "https://lokshikayat.bihar.gov.in/" },
  "Chandigarh": { legalAid: "https://chdslsa.gov.in/", rti: "https://rtionline.chd.gov.in/", grievance: "https://chandigarh.gov.in/" },
  "Chhattisgarh": { legalAid: "https://cgslsa.gov.in/", rti: "https://rtionline.cg.gov.in/", grievance: "https://janshikayat.cg.nic.in/" },
  "Delhi": { legalAid: "https://dslsa.org/", rti: "https://rtionline.delhi.gov.in/", grievance: "https://pgms.delhi.gov.in/" },
  "Goa": { legalAid: "https://slsagoa.nic.in/", rti: "https://www.goa.gov.in/", grievance: "https://goaonline.gov.in/" },
  "Gujarat": { legalAid: "https://gslsa.gujarat.gov.in/", rti: "https://rtionline.gujarat.gov.in/", grievance: "https://swagat.gujarat.gov.in/" },
  "Haryana": { legalAid: "https://hslsa.gov.in/", rti: "https://rtionline.haryana.gov.in/", grievance: "https://cmharyanacell.nic.in/" },
  "Himachal Pradesh": { legalAid: "https://hpslsa.nic.in/", rti: "https://hprti.hp.gov.in/", grievance: "https://jhansewa.hp.gov.in/" },
  "Jammu and Kashmir": { legalAid: "https://jkslsa.gov.in/", rti: "https://jkrttionline.gov.in/", grievance: "https://jkgrievance.nic.in/" },
  "Jharkhand": { legalAid: "https://jhalsa.org/", rti: "https://rtionline.jharkhand.gov.in/", grievance: "https://cm-jan-samvad.jharkhand.gov.in/" },
  "Karnataka": { legalAid: "https://kslsa.kar.nic.in/", rti: "https://rtionline.karnataka.gov.in/", grievance: "https://ipgrs.karnataka.gov.in/" },
  "Kerala": { legalAid: "https://kelsa.nic.in/", rti: "https://rtionline.kerala.gov.in/", grievance: "https://cmo.kerala.gov.in/" },
  "Madhya Pradesh": { legalAid: "https://mpslsa.gov.in/", rti: "https://rtionline.mp.gov.in/", grievance: "https://cmhelpline.mp.gov.in/" },
  "Maharashtra": { legalAid: "https://bombayhighcourt.nic.in/mslsa/", rti: "https://rtionline.maharashtra.gov.in/", grievance: "https://grievances.maharashtra.gov.in/" },
  "Odisha": { legalAid: "https://oslsa.nic.in/", rti: "https://rtiodisha.gov.in/", grievance: "https://janasunani.odisha.gov.in/" },
  "Punjab": { legalAid: "https://pulsa.punjab.gov.in/", rti: "https://rtionline.punjab.gov.in/", grievance: "https://connect.punjab.gov.in/" },
  "Rajasthan": { legalAid: "https://rlsa.gov.in/", rti: "https://rtionline.rajasthan.gov.in/", grievance: "https://sampark.rajasthan.gov.in/" },
  "Tamil Nadu": { legalAid: "https://tnslsa.tn.gov.in/", rti: "https://rtionline.tn.gov.in/", grievance: "https://cmhelpline.tnega.org/" },
  "Telangana": { legalAid: "https://tgselsa.nic.in/", rti: "https://telangana.gov.in/", grievance: "https://prajavani.telangana.gov.in/" },
  "Uttar Pradesh": { legalAid: "https://upslsa.upsdc.gov.in/", rti: "https://rtionline.up.gov.in/", grievance: "https://jansunwai.up.nic.in/" },
  "Uttarakhand": { legalAid: "https://ukslsa.uk.gov.in/", rti: "https://rtionline.uk.gov.in/", grievance: "https://cmhelpline.uk.gov.in/" },
  "West Bengal": { legalAid: "https://wbslsa.wb.gov.in/", rti: "https://wbic.gov.in/", grievance: "https://wb.gov.in/" }
};

const globalHelplines = [
  { name: "National Emergency Response (ERSS)", number: "112", category: "Emergency & Police" },
  { name: "National Legal Services Authority (NALSA)", number: "15100", category: "Legal Aid & Advice" },
  { name: "National Consumer Helpline (NCH)", number: "1915", category: "Consumer Grievance" },
  { name: "National Cyber Crime Reporting", number: "1930", category: "Cyber Fraud" },
  { name: "Direct Police Helpline", number: "100", category: "Police" },
  { name: "Women National Safety Helpline", number: "181", category: "Women & Safety" },
  { name: "Childline India", number: "1098", category: "Child Welfare" },
  { name: "Senior Citizen National Helpline", number: "14567", category: "Elder Care" },
  { name: "Disaster Management (NDMA)", number: "1078", category: "Disaster Relief" }
];

// Pre-built RTI Scenario Templates
const rtiTemplates = {
  roads: "I want to file a Section 6(1) RTI application requesting certified copies of the tender sanction order, contractor work completion certificate, total expenditure, and quality inspection test reports for the road repair work carried out in our municipal area/ward over the past 2 years.",
  license: "I applied for my Driving License / Passport / Ration Card under Application No: [Insert Number] on [Insert Date]. Despite the lapse of the citizen charter timeline, it has not been delivered. Under Section 6(1) RTI Act 2005, please provide the daily progress report and names of officials with whom my file was pending.",
  sanitation: "Please provide certified records under the RTI Act, 2005 showing the sanctioned budget vs actual expenditure for municipal sanitation, daily garbage collection contractor details, and fogging/drainage cleaning logs for our ward in the last 12 months.",
  land: "I submitted an application for Land Mutation / Revenue Record updating (Application Reference: [Insert ID]). Under Section 6(1) RTI Act, please provide the certified copy of the field inspection report by the Patwari/Revenue Inspector and reasons on record for the delay beyond the statutory timeline.",
  police: "With reference to Complaint / FIR No: [Insert No] registered at the police station on [Insert Date], please provide the certified copy of the case diary inquiry status, witness statements recorded, and the designated Investigating Officer's progress report under Section 6(1) of the RTI Act.",
  hospital: "Please provide certified records of the sanctioned vs available inventory of essential medicines, list of on-duty specialist doctors, and funds allocated for medical equipment maintenance at the local Government Hospital / Primary Health Centre (PHC) for the current financial year."
};

// Supported Voice Locale Mapping
const langVoiceMap = {
  "English": "en-IN",
  "Hindi": "hi-IN",
  "Marathi": "mr-IN",
  "Bengali": "bn-IN",
  "Tamil": "ta-IN",
  "Telugu": "te-IN",
  "Gujarati": "gu-IN",
  "Kannada": "kn-IN"
};

const allStates = Object.keys(indiaData).sort();

// DOM Elements
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const stepNode1 = document.getElementById('stepNode1');
const stepNode2 = document.getElementById('stepNode2');
const stepNode3 = document.getElementById('stepNode3');
const backBtn = document.getElementById('backBtn');
const jurisdictionBadge = document.getElementById('jurisdictionBadge');
const historySidebar = document.getElementById('historySidebar');
const historyToggleBtn = document.getElementById('historyToggleBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const rightsPanel = document.getElementById('rightsPanel');
const globalLangSelect = document.getElementById('globalLangSelect');
const skeletonLoader = document.getElementById('skeletonLoader');
const followupContainer = document.getElementById('followupContainer');
const followupThread = document.getElementById('followupThread');
const followupInput = document.getElementById('followupInput');
const followupSubmitBtn = document.getElementById('followupSubmitBtn');

const stateInput = document.getElementById('stateInput');
const stateList = document.getElementById('stateList');
const clearStateBtn = document.getElementById('clearState');
const dropStateIcon = document.getElementById('dropState');

const districtInput = document.getElementById('districtInput');
const districtList = document.getElementById('districtList');
const clearDistrictBtn = document.getElementById('clearDistrict');
const dropDistrictIcon = document.getElementById('dropDistrict');

const problemInput = document.getElementById('problemInput');
const charCount = document.getElementById('charCount');
const micBtn = document.getElementById('micBtn');
const submitIssueBtn = document.getElementById('submitIssueBtn');
const maxChars = 500;

const featuresGridContainer = document.getElementById('featuresGridContainer');
const featureDetailView = document.getElementById('featureDetailView');
const detailTitle = document.getElementById('detailTitle');
const detailContent = document.getElementById('detailContent');

let isSpeaking = false;
let currentSpeechText = "";
let currentSessionData = null;
let currentSelectedLanguage = "English";
let currentFontSizeLevel = 0; // -1, 0, 1

// --- XSS Sanitization Helper ---
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Accessibility Font Size Scaling ---
window.adjustFontSize = function(delta) {
  if (delta === 0) {
    currentFontSizeLevel = 0;
  } else {
    currentFontSizeLevel = Math.max(-1, Math.min(2, currentFontSizeLevel + delta));
  }

  const sizes = { '-1': '14px', '0': '16px', '1': '18px', '2': '20px' };
  document.documentElement.style.setProperty('--base-font-size', sizes[currentFontSizeLevel]);

  document.querySelectorAll('.font-ctrl-btn').forEach(btn => btn.classList.remove('active'));
  if (currentFontSizeLevel === 0) {
    const rBtn = document.getElementById('fontResetBtn');
    if (rBtn) rBtn.classList.add('active');
  }
};

// --- Toast Notification Center ---
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = `ℹ️`;
  if (type === 'success') icon = `✅`;
  if (type === 'error') icon = `⚠️`;

  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// --- Apply Pre-Built RTI Template ---
window.applyRtiTemplate = function(key) {
  const text = rtiTemplates[key];
  if (text) {
    problemInput.value = text;
    updateCharCount();
    problemInput.focus();
    showToast("Template applied. Customize with your specific dates or IDs.", "info");
  }
};

// --- Smart Draft Formatting ---
function formatDraftText(text) {
  if (!text) return "";
  if (text.split('\n').length > 6) return text;
  
  let formatted = text
    .replace(/^To,?\s*/gi, "To,\n")
    .replace(/Subject:\s*/gi, "\n\nSubject: ")
    .replace(/(Respected Sir\/Madam,|Dear Sir\/Madam,|Respected Sir,|Dear Sir,)\s*/gi, "\n\n$1\n\n")
    .replace(/(Thanking you\.?|Thank you\.?)\s*/gi, "\n\n$1\n\n")
    .replace(/(Yours faithfully,|Yours sincerely,|Yours truly,)\s*/gi, "$1\n")
    .replace(/,\s*(Mobile:|Phone:|Contact:)/gi, "\n$1")
    .replace(/,\s*(Address:)/gi, "\n$1");
    
  return formatted.trim();
}

// --- Language Switching ---
window.changeLanguage = function(lang) {
  currentSelectedLanguage = lang;
  if (isSpeaking) window.toggleReadAloud();
  localStorage.setItem('awaaz_lang', lang);
  showToast(`Language set to ${lang}`, "info");

  if (recognition) {
    recognition.lang = langVoiceMap[lang] || 'en-IN';
  }
};

// --- Theme Toggling ---
window.toggleTheme = function() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('awaaz_theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('awaaz_theme', 'dark');
  }
};

// --- Quick Civic Tools ---
window.openFeature = function(type) {
  featuresGridContainer.style.display = 'none';
  featureDetailView.classList.add('active');

  const userState = stateInput.value.trim() || "Your State";
  const userDistrict = districtInput.value.trim() || "Your District";
  const portals = statePortals[userState] || { legalAid: "https://nalsa.gov.in/", rti: "https://rtionline.gov.in/", grievance: "https://pgportal.gov.in/" };

  if (type === 'consumer') {
    detailTitle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Consumer Protection & e-Daakhil Redressal`;
    detailContent.innerHTML = `
      <p>Statutory resolution protocols under the Consumer Protection Act, 2019 in <strong>${escapeHtml(userState)}</strong>:</p>
      <br>
      <label class="checklist-item"><input type="checkbox"><span>Step 1: Collate tax invoices, warranty certificates, payment receipts, and communications.</span></label>
      <label class="checklist-item"><input type="checkbox"><span>Step 2: Serve a 15-day written notice to the merchant / company demanding refund or replacement.</span></label>
      <label class="checklist-item"><input type="checkbox"><span>Step 3: Register grievance on the National Consumer Helpline (Dial 1915 or consumerhelpline.gov.in).</span></label>
      <label class="checklist-item"><input type="checkbox"><span>Step 4: File a consumer petition online on e-Daakhil for the District Consumer Commission (${escapeHtml(userDistrict)}).</span></label>
      
      <div class="dlsa-box">
        <strong>📍 Pecuniary Jurisdiction (${escapeHtml(userDistrict)}):</strong> District Consumer Commission adjudicates consumer claims with value up to ₹50 Lakhs.
      </div>

      <div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
        <a href="https://consumerhelpline.gov.in/" target="_blank" class="external-link-btn">🔗 National Consumer Portal</a>
        <a href="https://edaakhil.nic.in/" target="_blank" class="external-link-btn">🔗 e-Daakhil Court Filing</a>
        <a href="${portals.legalAid}" target="_blank" class="external-link-btn">🔗 ${escapeHtml(userState)} Legal Services</a>
        <button class="action-tool-btn" onclick="copySummary('Consumer Steps: Invoices -> 15-day notice -> NCH 1915 -> e-Daakhil filing.')">📋 Copy Guide</button>
      </div>`;
  } else if (type === 'helplines') {
    detailTitle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Official National & Emergency Helplines`;
    detailContent.innerHTML = `
      <p>Verified government emergency and legal aid lines with 1-tap instant dialing:</p>
      <br>
      <input type="text" id="helplineSearchInput" class="helpline-search-input" placeholder="Search by name, department, or keyword (e.g. Legal, Cyber, Police, Women)..." oninput="filterHelplines()">
      <div class="helpline-list" id="helplineContainer"></div>
      
      <div style="margin-top: 14px;">
        <a href="https://indianhelpline.com/" target="_blank" class="external-link-btn">🔗 Official National Helpline Directory</a>
      </div>`;
    renderHelplines(globalHelplines);
  } else if (type === 'fir') {
    detailTitle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Police Protocols & State CCTNS (${escapeHtml(userState)})`;
    detailContent.innerHTML = `
      <p>Mandatory legal safeguards when reporting cognizable offenses or interacting with police in <strong>${escapeHtml(userState)}</strong>:</p>
      <br>
      <label class="checklist-item"><input type="checkbox"><span>Step 1: Demand registration of a <strong>Zero FIR</strong> if the police station cites lack of territorial jurisdiction.</span></label>
      <label class="checklist-item"><input type="checkbox"><span>Step 2: Obtain your free, signed copy of the FIR as mandated under law.</span></label>
      <label class="checklist-item"><input type="checkbox"><span>Step 3: If SHO refuses registration, submit a written complaint by Registered Post to the Superintendent of Police (SP) under Sec 154(3) CrPC / Sec 173 BNSS.</span></label>
      
      <div class="dlsa-box">
        <strong>📍 Digital Portals (${escapeHtml(userState)}):</strong> 
        <ul style="margin-left: 18px; margin-top: 5px;">
          <li>National Digital Police Portal: <a href="https://digitalpolice.gov.in/" target="_blank" style="color: var(--primary-color); font-weight: 600;">CCTNS Portal</a></li>
          <li>National Cyber Crime Portal: <a href="https://cybercrime.gov.in/" target="_blank" style="color: var(--primary-color); font-weight: 600;">cybercrime.gov.in</a> (Dial 1930)</li>
        </ul>
      </div>

      <div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
        <a href="https://digitalpolicecitizenservices.gov.in/" target="_blank" class="external-link-btn">🔗 CCTNS Citizen Services</a>
        <a href="${portals.grievance || 'https://pgportal.gov.in/'}" target="_blank" class="external-link-btn">🔗 ${escapeHtml(userState)} Grievance Redressal</a>
        <button class="action-tool-btn" onclick="copySummary('Police Rights: Insist on Zero FIR, demand free FIR copy, escalate to SP if refused.')">📋 Copy Guide</button>
      </div>`;
  }
};

window.renderHelplines = function(items) {
  const container = document.getElementById('helplineContainer');
  if (!container) return;
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No matching helplines found.</p>`;
    return;
  }
  items.forEach(h => {
    container.innerHTML += `
      <div class="helpline-card">
        <div class="helpline-info">
          <h4>${escapeHtml(h.name)}</h4>
          <p>Category: ${escapeHtml(h.category)}</p>
        </div>
        <a href="tel:${h.number}" class="helpline-number">
          <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 
          ${h.number}
        </a>
      </div>`;
  });
};

window.filterHelplines = function() {
  const query = document.getElementById('helplineSearchInput').value.toLowerCase();
  const filtered = globalHelplines.filter(h => h.name.toLowerCase().includes(query) || h.category.toLowerCase().includes(query) || h.number.includes(query));
  renderHelplines(filtered);
};

window.closeFeature = function() {
  featureDetailView.classList.remove('active');
  featuresGridContainer.style.display = 'grid';
};

window.copySummary = function(text) {
  navigator.clipboard.writeText(text).then(() => { showToast("Checklist copied to clipboard!", "success"); });
};

// --- Tab Switching ---
window.switchTab = function(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
  
  const targetBtn = document.querySelector(`[data-target="${tabId}"]`);
  const targetPane = document.getElementById(tabId);
  if (targetBtn) targetBtn.classList.add('active');
  if (targetPane) targetPane.classList.add('active');
};

// --- Toggle Sidebar ---
historyToggleBtn.addEventListener('click', () => {
  historySidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!historySidebar.contains(e.target) && !historyToggleBtn.contains(e.target)) {
    historySidebar.classList.remove('open');
  }
});

// --- Reset / Start New Consultation ---
window.startNewChat = function() {
  if (isSpeaking) window.toggleReadAloud();
  step2.style.display = 'none';
  step1.style.display = 'flex';
  problemInput.value = '';
  document.getElementById('resultContainer').style.display = 'none';
  followupContainer.style.display = 'none';
  historySidebar.classList.remove('open');
  rightsPanel.classList.remove('active');
  currentSessionData = null;

  stepNode1.className = "step-node active";
  stepNode2.className = "step-node";
  stepNode3.className = "step-node";
};

// --- On Load Setup ---
window.onload = () => {
  const savedTheme = localStorage.getItem('awaaz_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  const savedLang = localStorage.getItem('awaaz_lang') || "English";
  currentSelectedLanguage = savedLang;
  if (globalLangSelect) globalLangSelect.value = savedLang;

  const savedState = localStorage.getItem('awaaz_state');
  const savedDistrict = localStorage.getItem('awaaz_district');
  
  if (savedState && indiaData[savedState]) {
    stateInput.value = savedState;
    clearStateBtn.style.display = 'block';
    dropStateIcon.style.display = 'none';
    
    districtInput.disabled = false;
    districtInput.placeholder = "Select your district...";
    
    if (savedDistrict && indiaData[savedState].includes(savedDistrict)) {
      districtInput.value = savedDistrict;
      clearDistrictBtn.style.display = 'block';
      dropDistrictIcon.style.display = 'none';
    }
  }
  loadHistoryUI();
};

// --- Input Clear & Dropdown Toggles ---
function handleIconToggle(inputElem, clearBtn, dropIcon, onClear) {
  inputElem.addEventListener('input', () => {
    const hasText = inputElem.value.length > 0;
    clearBtn.style.display = hasText ? 'block' : 'none';
    dropIcon.style.display = hasText ? 'none' : 'flex';
  });
  
  clearBtn.addEventListener('click', () => {
    inputElem.value = '';
    clearBtn.style.display = 'none';
    dropIcon.style.display = 'flex';
    inputElem.focus();
    if (onClear) onClear();
  });
}

handleIconToggle(stateInput, clearStateBtn, dropStateIcon, () => {
  districtInput.value = '';
  districtInput.disabled = true;
  districtInput.placeholder = "Select state first...";
  clearDistrictBtn.style.display = 'none';
  dropDistrictIcon.style.display = 'flex';
  localStorage.removeItem('awaaz_state');
  localStorage.removeItem('awaaz_district');
});

handleIconToggle(districtInput, clearDistrictBtn, dropDistrictIcon, () => {
  localStorage.removeItem('awaaz_district');
});

// --- Custom Autocomplete Setup ---
function setupAutocomplete(input, listElement, clearBtn, dropIcon, getItems, onSelect) {
  let filtered = [];
  let currentFocus = -1; 

  function renderSuggestions() {
    const query = input.value.trim().toLowerCase();
    const items = getItems();
    filtered = items.filter(item => item.toLowerCase().includes(query));
    currentFocus = -1;

    listElement.innerHTML = '';
    if (filtered.length === 0) {
      listElement.style.display = 'none';
      return;
    }

    filtered.forEach(item => {
      const li = document.createElement('li');
      const regex = new RegExp(`(${query})`, "gi");
      li.innerHTML = item.replace(regex, "<strong>$1</strong>");

      function handleSelect(e) {
        e.preventDefault(); 
        selectItem(item);
      }
      
      li.addEventListener('mousedown', handleSelect);
      listElement.appendChild(li);
    });
    listElement.style.display = 'block';
  }

  function selectItem(val) {
    input.value = val;
    clearBtn.style.display = 'block';
    dropIcon.style.display = 'none';
    listElement.style.display = 'none';
    if (onSelect) onSelect(val);
  }

  input.addEventListener('input', renderSuggestions);
  input.addEventListener('focus', renderSuggestions);
  input.addEventListener('click', renderSuggestions);

  input.addEventListener('keydown', (e) => {
    let items = listElement.getElementsByTagName('li');
    if (e.key === 'ArrowDown') {
      currentFocus++;
      addActive(items);
    } else if (e.key === 'ArrowUp') {
      currentFocus--;
      addActive(items);
    } else if (e.key === 'Enter') {
      e.preventDefault(); 
      if (currentFocus > -1) {
        if (items) selectItem(filtered[currentFocus]);
      } else if (filtered.length === 1) {
        selectItem(filtered[0]);
      }
    }
  });

  function addActive(items) {
    if (!items || items.length === 0) return false;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add('active');
    items[currentFocus].scrollIntoView({ block: "nearest" }); 
  }

  function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }

  input.addEventListener('blur', () => {
    setTimeout(() => { listElement.style.display = 'none'; }, 150);
  });
}

setupAutocomplete(stateInput, stateList, clearStateBtn, dropStateIcon, () => allStates, (selectedState) => {
  districtInput.disabled = false;
  districtInput.placeholder = "Select your district...";
  districtInput.value = '';
  clearDistrictBtn.style.display = 'none';
  dropDistrictIcon.style.display = 'flex';
  districtInput.focus(); 
});

setupAutocomplete(districtInput, districtList, clearDistrictBtn, dropDistrictIcon, () => {
  const state = stateInput.value.trim();
  return (indiaData[state] || []).sort();
}, (selectedDistrict) => {
  districtInput.blur();
});

stateInput.addEventListener('input', () => {
  if (!indiaData[stateInput.value.trim()]) {
    districtInput.disabled = true;
    districtInput.placeholder = "Select state first...";
    districtInput.value = '';
    clearDistrictBtn.style.display = 'none';
    dropDistrictIcon.style.display = 'flex';
  }
});

// --- Step 1 to Step 2 Transition ---
step1.addEventListener('submit', (e) => {
  e.preventDefault(); 
  
  const selectedState = stateInput.value.trim();
  const selectedDistrict = districtInput.value.trim();

  if (indiaData[selectedState] && indiaData[selectedState].includes(selectedDistrict)) {
    localStorage.setItem('awaaz_state', selectedState);
    localStorage.setItem('awaaz_district', selectedDistrict);
    
    if (jurisdictionBadge) {
      jurisdictionBadge.textContent = `📍 Authority Region: ${selectedDistrict}, ${selectedState}`;
    }

    step1.style.display = 'none';
    step2.style.display = 'flex';
    rightsPanel.classList.add('active');

    stepNode1.className = "step-node completed";
    stepNode2.className = "step-node active";
    stepNode3.className = "step-node";

  } else {
    step1.classList.remove('shake-error');
    void step1.offsetWidth; 
    step1.classList.add('shake-error');
    stateInput.style.borderColor = "var(--error-color)";
    districtInput.style.borderColor = "var(--error-color)";
    showToast("Please select a valid State and District.", "error");
    
    setTimeout(() => {
      stateInput.style.borderColor = "var(--border-subtle)";
      districtInput.style.borderColor = "var(--border-subtle)";
    }, 1500);
  }
});

backBtn.addEventListener('click', () => {
  if (isSpeaking) window.toggleReadAloud();
  step2.style.display = 'none';
  step1.style.display = 'flex';
  document.getElementById('resultContainer').style.display = 'none';
  followupContainer.style.display = 'none';
  rightsPanel.classList.remove('active');

  stepNode1.className = "step-node active";
  stepNode2.className = "step-node";
  stepNode3.className = "step-node";
});

// --- Chatbox & Voice Input ---
function updateCharCount() {
  const currentLength = problemInput.value.length;
  charCount.textContent = `${currentLength} / ${maxChars}`;
  if (currentLength >= maxChars) {
    charCount.classList.add('limit-reached');
  } else {
    charCount.classList.remove('limit-reached');
  }
}

problemInput.addEventListener('input', updateCharCount);

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isDictating = false;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false; 
  recognition.interimResults = false;
  recognition.lang = langVoiceMap[currentSelectedLanguage] || 'en-IN'; 

  recognition.onstart = () => {
    isDictating = true;
    micBtn.classList.add('recording');
    problemInput.placeholder = "Listening... Speak your RTI query now.";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const currentText = problemInput.value;
    let newText = currentText + (currentText.length > 0 && !currentText.endsWith(' ') ? " " : "") + transcript;
    problemInput.value = newText.substring(0, maxChars); 
    updateCharCount();
  };

  recognition.onerror = () => { stopRecording(); };
  recognition.onend = () => { stopRecording(); };
} else {
  micBtn.style.display = 'none';
}

function stopRecording() {
  isDictating = false;
  micBtn.classList.remove('recording');
  problemInput.placeholder = "E.g., I want to file an RTI regarding the delay in road construction...";
}

micBtn.addEventListener('click', () => {
  if (!recognition) return;
  if (!isDictating) {
    recognition.lang = langVoiceMap[currentSelectedLanguage] || 'en-IN';
    recognition.start();
  } else {
    recognition.stop();
  }
});

// --- LocalStorage History ---
function saveToHistory(payload, responseData) {
  let history = JSON.parse(localStorage.getItem('awaaz_history') || '[]');
  const newItem = {
    id: Date.now(),
    issue: payload.issue_description,
    location: `${payload.district}, ${payload.state}`,
    language: payload.preferred_language,
    date: new Date().toLocaleDateString(),
    data: responseData
  };
  
  history.unshift(newItem);
  if (history.length > 15) history.pop();
  
  localStorage.setItem('awaaz_history', JSON.stringify(history));
  loadHistoryUI(newItem.id);
}

function loadHistoryUI(activeId = null) {
  const historyList = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('awaaz_history') || '[]');

  if (history.length === 0) {
    historyList.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; color: var(--text-muted);">No recent consultations.</div>`;
    return;
  }

  historyList.innerHTML = '';
  history.forEach(item => {
    const div = document.createElement('div');
    div.className = `history-item ${activeId === item.id ? 'active' : ''}`;
    div.innerHTML = `
      <span class="history-item-text" title="${escapeHtml(item.issue)}">${escapeHtml(item.issue)}</span>
      <button class="delete-item-btn" title="Delete consultation" onclick="deleteHistoryItem(event, ${item.id})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    `;
    div.onclick = (e) => {
      if (e.target.closest('.delete-item-btn')) return;
      if (isSpeaking) window.toggleReadAloud();
      
      document.querySelectorAll('.history-item').forEach(el => el.classList.remove('active'));
      div.classList.add('active');

      step1.style.display = 'none';
      step2.style.display = 'flex';
      if (jurisdictionBadge) jurisdictionBadge.textContent = `📍 ${item.location}`;
      problemInput.value = item.issue;
      renderTabbedResults(item.data);
      historySidebar.classList.remove('open');
      rightsPanel.classList.add('active');

      stepNode1.className = "step-node completed";
      stepNode2.className = "step-node completed";
      stepNode3.className = "step-node active";
    };
    historyList.appendChild(div);
  });
}

window.deleteHistoryItem = function(event, id) {
  event.stopPropagation();
  let history = JSON.parse(localStorage.getItem('awaaz_history') || '[]');
  history = history.filter(item => item.id !== id);
  localStorage.setItem('awaaz_history', JSON.stringify(history));
  loadHistoryUI();
  showToast("Record removed from history.", "info");
};

window.clearHistory = function() {
  localStorage.removeItem('awaaz_history');
  loadHistoryUI();
  showToast("History cleared.", "info");
};

// --- Text-to-Speech (TTS) ---
window.toggleReadAloud = function() {
  const btn = document.getElementById('readAloudBtn');
  if (!btn) return;

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> Read Aloud`;
    btn.classList.remove('speaking');
    return;
  }

  if (!currentSpeechText) return;

  const utterance = new SpeechSynthesisUtterance(currentSpeechText);
  utterance.lang = langVoiceMap[currentSelectedLanguage] || 'en-IN';
  
  utterance.onend = () => {
    isSpeaking = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> Read Aloud`;
    btn.classList.remove('speaking');
  };

  utterance.onerror = () => {
    isSpeaking = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> Read Aloud`;
    btn.classList.remove('speaking');
  };

  window.speechSynthesis.speak(utterance);
  isSpeaking = true;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12"/></svg> Stop Reading`;
  btn.classList.add('speaking');
};

// --- Backend API Submission ---
submitIssueBtn.addEventListener('click', async () => {
  const payload = {
    issue_description: problemInput.value.trim(),
    state: stateInput.value.trim(),
    district: districtInput.value.trim(),
    preferred_language: currentSelectedLanguage
  };

  if (!payload.issue_description) {
    showToast("Please describe your problem or RTI information sought.", "error");
    return;
  }

  try {
    if (isSpeaking) window.toggleReadAloud();
    submitIssueBtn.textContent = "Analyzing Rights & Statutory Portals...";
    submitIssueBtn.disabled = true;
    
    document.getElementById('resultContainer').style.display = 'none';
    followupContainer.style.display = 'none';
    skeletonLoader.style.display = 'flex';

    const response = await fetch("/api/navigate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || "Failed to retrieve guidance from Rights Navigator.");
    }

    const data = await response.json();
    currentSessionData = { payload, data };
    saveToHistory(payload, data);
    renderTabbedResults(data);
    showToast("Statutory RTI formulation ready!", "success");

    stepNode1.className = "step-node completed";
    stepNode2.className = "step-node completed";
    stepNode3.className = "step-node active";

  } catch (error) {
    console.error("Connection Error:", error);
    showToast(error.message || "Could not connect to backend server.", "error");
  } finally {
    skeletonLoader.style.display = 'none';
    submitIssueBtn.textContent = "Analyze & Generate RTI Draft";
    submitIssueBtn.disabled = false;
  }
});

function renderTabbedResults(data) {
  const advice = data.section_1_advice;
  const impl = data.section_2_implementation;
  const contact = impl.contact_info;

  let stepsHtml = impl.step_by_step_execution
    .map(step => `<li><strong>Step ${step.step_number}:</strong> ${escapeHtml(step.instruction)}</li>`)
    .join('');
  let rightsHtml = advice.applicable_rights
    .map(right => `<li>${escapeHtml(right)}</li>`)
    .join('');
  
  let formattedDraft = formatDraftText(impl.draft_text_to_submit);

  let rightsText = advice.applicable_rights.join('. ');
  let stepsText = impl.step_by_step_execution.map(step => `Step ${step.step_number}: ${step.instruction}`).join('. ');
  currentSpeechText = `${advice.situation_analysis}. Your Statutory Rights are: ${rightsText}. The official public authority is ${impl.target_authority_or_portal}. Steps: ${stepsText}.`;

  let resultContainer = document.getElementById('resultContainer');
  resultContainer.style.display = 'block';

  resultContainer.innerHTML = `
    <div class="tabs-container">
      <div class="tabs-header">
        <button class="tab-btn active" data-target="tab-overview" onclick="switchTab('tab-overview')">
          <svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>
          Statutory Overview & Rights
        </button>
        <button class="tab-btn" data-target="tab-action" onclick="switchTab('tab-action')">
          <svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          Action & Filing Plan
        </button>
        <button class="tab-btn" data-target="tab-draft" onclick="switchTab('tab-draft')">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Formal Section 6(1) Draft
        </button>
        
        <button id="readAloudBtn" class="tts-btn" style="margin-left: auto;" onclick="toggleReadAloud()">
          <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          Read Aloud
        </button>
      </div>

      <!-- TAB 1: Overview -->
      <div class="tab-pane active" id="tab-overview">
        <div class="bento-card">
          <h3>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Legal Position Analysis
          </h3>
          <p>${escapeHtml(advice.situation_analysis)}</p>
          <div style="margin-top: 10px; padding: 10px; background: var(--hover-bg); border-radius: 8px; font-size: 0.85rem; border-left: 3px solid var(--primary-color);">
            <strong>Recommended Strategy:</strong> ${escapeHtml(advice.recommended_strategy)}
          </div>
        </div>
        <div class="bento-card">
          <h3>
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Applicable Statutory Rights
          </h3>
          <ul>${rightsHtml}</ul>
        </div>
      </div>

      <!-- TAB 2: Action Plan -->
      <div class="tab-pane" id="tab-action">
        <div class="bento-card">
          <h3>
            <svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
            Public Authority / Portal
          </h3>
          <p><strong>Designated Authority:</strong> ${escapeHtml(impl.target_authority_or_portal)}</p>
          <div class="contact-row">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <p><strong>Official Phone:</strong> ${escapeHtml(contact.phone_number)}</p>
          </div>
          ${contact.email ? `<div class="contact-row"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><p><strong>Grievance / PIO Email:</strong> ${escapeHtml(contact.email)}</p></div>` : ''}
          <div class="contact-row">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <p><strong>Working Hours:</strong> ${escapeHtml(contact.availability_days)} (${escapeHtml(contact.availability_time)})</p>
          </div>
          <a href="${escapeHtml(impl.portal_url)}" target="_blank" class="portal-link-btn">
            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open Official Portal
          </a>
        </div>
        <div class="bento-card">
          <h3>
            <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            Filing Execution Steps
          </h3>
          <ol>${stepsHtml}</ol>
        </div>
      </div>

      <!-- TAB 3: Legal Draft -->
      <div class="tab-pane" id="tab-draft">
        <div class="formal-letterhead-container full-width" style="grid-column: span 2;">
          <div class="letterhead-header">
            <h4>FORMAL APPLICATION UNDER SECTION 6(1) OF THE RTI ACT, 2005</h4>
            <p>Ready for Speed Post / Physical Filing / Online Portal Submission</p>
          </div>
          
          <div class="draft-header-row">
            <div>
              <span class="draft-edit-badge">✏️ Edit applicant details, postal addresses, or specific queries directly below:</span>
            </div>
            <div class="draft-actions-group">
              <button type="button" class="action-tool-btn" id="copyDraftBtn" onclick="copyDraftText()">
                <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Text
              </button>
              <button type="button" class="action-tool-btn" onclick="downloadDraftPDF()">
                <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download PDF
              </button>
              <button type="button" class="action-tool-btn" onclick="printDraft()">
                <svg viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print (A4)
              </button>
              <button type="button" class="action-tool-btn whatsapp-btn" onclick="shareOnWhatsApp()">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp
              </button>
            </div>
          </div>
          <textarea id="draftTextArea" class="draft-textarea">${escapeHtml(formattedDraft)}</textarea>
        </div>
      </div>

    </div>
  `;

  followupContainer.style.display = 'flex';
  followupThread.innerHTML = '';
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Action Tools: Copy, PDF, Print, WhatsApp ---
window.copyDraftText = function() {
  const draftArea = document.getElementById('draftTextArea');
  const copyBtn = document.getElementById('copyDraftBtn');
  if (!draftArea) return;

  navigator.clipboard.writeText(draftArea.value).then(() => {
    copyBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
    copyBtn.classList.add("copied");
    showToast("Application draft copied to clipboard!", "success");

    setTimeout(() => {
      copyBtn.innerHTML = `<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Text`;
      copyBtn.classList.remove("copied");
    }, 2000);
  });
};

window.downloadDraftPDF = function() {
  const draftArea = document.getElementById('draftTextArea');
  if (!draftArea || !draftArea.value.trim()) {
    showToast("No draft text available to download.", "error");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("FORMAL APPLICATION UNDER SECTION 6(1) OF THE RTI ACT, 2005", 15, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 15, 28);

  doc.setDrawColor(180);
  doc.line(15, 32, 195, 32);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  const splitText = doc.splitTextToSize(draftArea.value, 180);
  doc.text(splitText, 15, 40);

  doc.save("RTI_Section_6_1_Application.pdf");
  showToast("Formal RTI PDF downloaded!", "success");
};

window.printDraft = function() {
  window.switchTab('tab-draft');
  setTimeout(() => {
    window.print();
  }, 150);
};

window.shareOnWhatsApp = function() {
  const draftArea = document.getElementById('draftTextArea');
  if (!draftArea || !draftArea.value.trim()) {
    showToast("No draft text to share.", "error");
    return;
  }
  const text = `*RTI Application Draft via Awaaz AI:*\n\n${draftArea.value}`;
  const encoded = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
};

// --- Follow-Up Q&A ---
window.submitFollowUp = async function() {
  const question = followupInput.value.trim();
  if (!question) return;

  if (!currentSessionData) {
    showToast("Please submit an issue first before asking follow-ups.", "error");
    return;
  }

  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'followup-msg followup-user';
  userMsgDiv.textContent = question;
  followupThread.appendChild(userMsgDiv);
  followupInput.value = '';
  followupSubmitBtn.disabled = true;
  followupSubmitBtn.textContent = 'Thinking...';

  try {
    const payload = {
      original_issue: currentSessionData.payload.issue_description,
      state: currentSessionData.payload.state,
      district: currentSessionData.payload.district,
      advice_summary: currentSessionData.data.section_1_advice.situation_analysis,
      user_question: question,
      preferred_language: currentSelectedLanguage
    };

    const res = await fetch('/api/followup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error("Failed to get follow-up clarification.");
    }

    const data = await res.json();
    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'followup-msg followup-bot';
    botMsgDiv.innerHTML = `
      <div>${escapeHtml(data.answer)}</div>
      ${data.actionable_tip ? `<div class="followup-tip"><strong>💡 Statutory Tip:</strong> ${escapeHtml(data.actionable_tip)}</div>` : ''}
    `;
    followupThread.appendChild(botMsgDiv);
    followupThread.scrollTop = followupThread.scrollHeight;

  } catch (error) {
    showToast(error.message || "Error getting follow-up answer.", "error");
  } finally {
    followupSubmitBtn.disabled = false;
    followupSubmitBtn.textContent = 'Ask';
  }
};

followupInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitFollowUp();
  }
});

// --- Assistant Widget (Awaaz Sahayak) ---
const assistantFab = document.getElementById('assistantFab');
const assistantWindow = document.getElementById('assistantWindow');
const closeAssistant = document.getElementById('closeAssistant');
const chatBox = document.getElementById('assistantChat');

const botData = {
  "English": {
    greeting: "Hello! I am Awaaz Sahayak. Please select your language:",
    welcome: "Welcome to Awaaz AI RTI Portal. How can I assist you?",
    optState: "What does 'State' mean?",
    ansState: "'State' is your region/state (e.g., Bihar, Maharashtra). Click the first box to choose yours.",
    optDistrict: "What does 'District' mean?",
    ansDistrict: "'District' is your local city/district area. Choose your state first to unlock this box!",
    optProblem: "How do I frame an RTI query?",
    ansProblem: "State specific records or files you want to inspect rather than asking 'why'. Click quick templates for common examples!"
  },
  "Hindi": {
    greeting: "नमस्ते! मैं आवाज़ सहायक हूँ। कृपया अपनी भाषा चुनें:",
    welcome: "आवाज़ आरटीआई पोर्टल में आपका स्वागत है। आप क्या जानना चाहते हैं?",
    optState: "'State' (राज्य) का क्या मतलब है?",
    ansState: "'State' का मतलब आपका **राज्य** है (जैसे बिहार, उत्तर प्रदेश)। अपना राज्य चुनने के लिए पहले बॉक्स पर क्लिक करें।",
    optDistrict: "'District' (ज़िला) का क्या मतलब है?",
    ansDistrict: "'District' का मतलब आपका **ज़िला** है। इसे खोलने के लिए पहले अपना राज्य चुनें!",
    optProblem: "आरटीआई आवेदन कैसे लिखें?",
    ansProblem: "हमेशा विशिष्ट सरकारी रिकॉर्ड, टेंडर या फाइलों की प्रमाणित प्रतियां मांगें। ऊपर दिए गए रेडीमेड टेम्पलेट्स पर क्लिक करें!"
  },
  "Marathi": {
    greeting: "नमस्कार! मी आवाज सहाय्यक आहे. कृपया आपली भाषा निवडा:",
    welcome: "आवाज आरटीआय पोर्टलवर आपले स्वागत आहे. तुम्हाला काय जाणून घ्यायचे आहे?",
    optState: "'State' (राज्य) म्हणजे काय?",
    ansState: "'State' म्हणजे तुमचे **राज्य** (उदा. महाराष्ट्र). आपले राज्य निवडण्यासाठी पहिल्या बॉक्सवर क्लिक करा.",
    optDistrict: "'District' (जिल्हा) म्हणजे काय?",
    ansDistrict: "'District' म्हणजे तुमचा **जिल्हा**. तो उघडण्यासाठी आधी तुमचे राज्य निवडा!",
    optProblem: "माहिती अधिकार अर्ज कसा करावा?",
    ansProblem: "नेहमी विशिष्ट शासकीय नोंदी, टेंडर किंवा प्रमाणित प्रती मागा. वर दिलेल्या तयार टेम्पलेटवर क्लिक करा!"
  }
};

const assistantLanguages = ["English", "Hindi", "Marathi"];

function addBotMsg(text) {
  chatBox.innerHTML += `<div class="chat-msg bot-msg">${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMsg(text) {
  chatBox.innerHTML += `<div class="chat-msg user-msg">${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function initAssistant() {
  chatBox.innerHTML = ''; 
  addBotMsg(botData["English"].greeting);
  let langHtml = '<div class="lang-grid">';
  assistantLanguages.forEach(lang => {
    langHtml += `<button class="lang-chip" onclick="setAssistantLanguage('${lang}')">${lang}</button>`;
  });
  langHtml += '</div>';
  chatBox.innerHTML += langHtml;
}

window.setAssistantLanguage = function(lang) {
  addUserMsg(lang);
  changeLanguage(lang);
  const data = botData[lang] || botData["English"]; 
  setTimeout(() => {
    addBotMsg(data.welcome);
    let actionHtml = `<div class="lang-grid">
      <button class="action-chip" onclick="explainField('State', '${lang}')">${data.optState}</button>
      <button class="action-chip" onclick="explainField('District', '${lang}')">${data.optDistrict}</button>
      <button class="action-chip" onclick="explainField('Problem', '${lang}')">${data.optProblem}</button>
    </div>`;
    chatBox.innerHTML += actionHtml;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
};

window.explainField = function(field, lang) {
  const data = botData[lang] || botData["English"];
  let userQuery = data.optState;
  let botAns = data.ansState;
  
  if (field === 'District') {
    userQuery = data.optDistrict;
    botAns = data.ansDistrict;
  } else if (field === 'Problem') {
    userQuery = data.optProblem;
    botAns = data.ansProblem;
  }

  addUserMsg(userQuery);
  setTimeout(() => { addBotMsg(botAns); }, 600);
};

initAssistant();

assistantFab.addEventListener('click', () => {
  assistantWindow.classList.add('active');
  assistantFab.style.display = 'none';
});

closeAssistant.addEventListener('click', () => {
  assistantWindow.classList.remove('active');
  assistantFab.style.display = 'flex';
});

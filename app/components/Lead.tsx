interface LeadProps {
  id: number;
  campaign_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  date_of_birth: string;
  lead_status: string;
}

export default function Lead ({id, campaign_name, first_name, last_name, email, phone, address, date_of_birth, lead_status}: LeadProps) {
  return (
    <div style={{border: '3px solid black', borderRadius: '10px', padding: '15px', margin: '10px 10px', width: '400px'}}>
      <h3><b>ID:</b> {id}</h3>
      <h4><b>Campaign:</b> {campaign_name}</h4>
      <h4><b>Customer Name:</b> {first_name} {last_name}</h4>
      <h4><b>Date of Birth:</b> {date_of_birth}</h4>
      <h4><b>Email Address:</b> {email}</h4>
      <h4><b>Phone Number:</b> {phone}</h4>
      <h4><b>Address:</b> {address}</h4>
      <h4><b>Lead Status:</b> {lead_status}</h4>
    </div>
  )
}
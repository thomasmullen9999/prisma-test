import { prisma } from '@/lib/prisma'
import Lead from './components/Lead';

async function getLeads() {
  const leads = await prisma.lead.findMany({
/*     where: {
      campaign: {
        name: 'Sainsburys' // Nested query for relational filtering
      }
    }, */
    include: {
      campaign: {
        select: { name: true }
      }
    }
  })
  return leads;
}

export default async function Home() {
  const leads = await getLeads();
  return (
<div 
  style={{ margin: '30px' }} 
  className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <h1 className="text-2xl font-bold mb-6 text-center">Leads</h1>
  
  <div className="overflow-x-auto">
    <table className="table-auto border-collapse w-full shadow-lg">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <th className="border-b-2 border-gray-300 px-6 py-3">ID</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Campaign Name</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">First Name</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Last Name</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Email</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Phone</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Address</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Date of Birth</th>
          <th className="border-b-2 border-gray-300 px-6 py-3">Lead Status</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        {
          leads.map((lead: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <tr key={lead.id} className={`${isEven ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.id}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.campaign.name}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.first_name}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.last_name}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.email}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.phone}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.address}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.date_of_birth}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">{lead.lead_status}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
</div>
  );
}

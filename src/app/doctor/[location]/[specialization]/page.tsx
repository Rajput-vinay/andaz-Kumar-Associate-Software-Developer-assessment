import DoctorCard from "@/component/DoctorCard";

export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: string;
  location: string;
  clinicName: string;
  consultationFee: number;
  rating: number;
  patientStories: number;
  imageUrl: string;
  availableToday: boolean;
}

interface Params {
  params: Promise<{
    location: string;
    specialization: string;
  }>;
}

export default async function Page({ params }: Params) {
  const { location, specialization } =  await params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL as string}/doctor/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, specialization }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

  const { doctors }: { doctors: Doctor[] } = await res.json();
  console.log(doctors)
    if (doctors.length === 0) {
      return (
        <p className="text-center text-gray-600 mt-10">
          No doctors found in <strong>{location}</strong> with specialization <strong>{specialization}</strong>.
        </p>
      );
    }

    return (
      <div className="p-6 max-w-5xl mx-auto ">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} {...doctor} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load doctors. Please try again later.
      </p>
    );
  }
}

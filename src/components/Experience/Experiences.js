import Martinrea from "../../assets/martinrea.jpg";

export const Experiences = [
  {
    title: "Software Engineer",
    company: "Martinrea Alfield",
    icon: Martinrea,
    location: "Vaughan, ON",
    date: "January 2023 - April 2023",
    description: (
      <p>
        • Integrated a modified version of ORB‑SLAM3 using C++ on a completely
        vision‑based autonomous intelligent vehicle (AIV) resulting in a fully
        automated delivery transport system
        <br />
        <br />• Collaborated with a team to implement the SLAM algorithm by
        unifying the Intel RealSense Depth cameras and IMU using the Extended
        Kalman Filter, so the AIV can support autonomous long distance
        navigation, removing encoder error accumulation.
        <br />
        <br />• Developed in a Linux environment on NVIDIA Jetsons using CUDA to
        parallelize bit‑wise masking, resulting in drastic performance boosts in
        real‑time generation of topdowns.
      </p>
    ),
  },
];

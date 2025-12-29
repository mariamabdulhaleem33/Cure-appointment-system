import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DoctorCard from "../ui/DoctorCard"
import { FaRoute } from "react-icons/fa6"
import DoctorsMap from "./DoctorsMap"
import useMap from "@/hooks/useMap"

import { test } from "@/assets"
import { useUserLocation } from "@/hooks/useUserLocation"

export default function Modal() {
  const doctors = [
    {
      id: 1,
      user: {
        name: "Dr. Dr. Ila Stroman",
        email: "delaney.medhurst@example.org",
      },
      specialization: "Neurology",
      session_price: "368.00",
      availability_slots: [
        {
          date: "2025-12-31",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-31",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-31",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-31",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-31",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-31",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-31",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-31",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 29.9837,
        lng: 31.3233,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 2,
      user: {
        name: "Dr. Kayli Tromp",
        email: "glennie05@example.com",
      },
      specialization: "Dermatology",
      session_price: "312.00",
      availability_slots: [
        {
          date: "2026-01-01",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2026-01-01",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2026-01-01",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2026-01-01",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2026-01-01",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2026-01-01",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2026-01-01",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2026-01-01",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.041999999999998,
        lng: 31.1719,
        address: "alkhartoum, Sudan",
      },
    },
    {
      id: 3,
      user: {
        name: "Dr. Carley Gleichner",
        email: "alex19@example.net",
      },
      specialization: "Dermatology",
      session_price: "127.00",
      availability_slots: [
        {
          date: "2025-12-28",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-28",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-28",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-28",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-28",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-28",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-28",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-28",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0427,
        lng: 31.192600000000002,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 4,
      user: {
        name: "Dr. Prof. Antoinette Towne DVM",
        email: "gjohns@example.org",
      },
      specialization: "Orthopedics",
      session_price: "374.00",
      availability_slots: [
        {
          date: "2025-12-29",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-29",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-29",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-29",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-29",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-29",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-29",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-29",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0132,
        lng: 31.1704,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 5,
      user: {
        name: "Dr. Mr. Kaley Gleason",
        email: "oreilly.jedidiah@example.com",
      },
      specialization: "Neurology",
      session_price: "255.00",
      availability_slots: [
        {
          date: "2026-01-02",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2026-01-02",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2026-01-02",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2026-01-02",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2026-01-02",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2026-01-02",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2026-01-02",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2026-01-02",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0564,
        lng: 31.2151,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 6,
      user: {
        name: "Dr. Miss Hertha Toy DVM",
        email: "aileen27@example.com",
      },
      specialization: "Dermatology",
      session_price: "335.00",
      availability_slots: [
        {
          date: "2025-12-27",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-27",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-27",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-27",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-27",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-27",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-27",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-27",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.1058,
        lng: 31.192500000000003,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 7,
      user: {
        name: "Dr. Jaclyn Morar III",
        email: "keely68@example.com",
      },
      specialization: "Dermatology",
      session_price: "319.00",
      availability_slots: [
        {
          date: "2025-12-29",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-29",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-29",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-29",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-29",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-29",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-29",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-29",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0567,
        lng: 31.2527,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 8,
      user: {
        name: "Dr. Mollie Smitham",
        email: "garry.hills@example.org",
      },
      specialization: "Pediatrics",
      session_price: "180.00",
      availability_slots: [
        {
          date: "2026-01-01",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2026-01-01",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2026-01-01",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2026-01-01",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2026-01-01",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2026-01-01",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2026-01-01",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2026-01-01",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0752,
        lng: 31.2195,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 9,
      user: {
        name: "Dr. Miss Stephanie Rippin",
        email: "osborne.purdy@example.net",
      },
      specialization: "Pediatrics",
      session_price: "197.00",
      availability_slots: [
        {
          date: "2025-12-30",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-30",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-30",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-30",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-30",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-30",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-30",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-30",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 29.9584,
        lng: 31.1749,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 10,
      user: {
        name: "Dr. Kody Funk",
        email: "casper.ashley@example.net",
      },
      specialization: "Neurology",
      session_price: "380.00",
      availability_slots: [
        {
          date: "2025-12-28",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-28",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-28",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-28",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-28",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-28",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-28",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-28",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0592,
        lng: 31.3216,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 11,
      user: {
        name: "Dr. Dr. Braxton Kuvalis",
        email: "javon.hagenes@example.com",
      },
      specialization: "Dermatology",
      session_price: "239.00",
      availability_slots: [
        {
          date: "2025-12-27",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-27",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-27",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-27",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-27",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-27",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-27",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-27",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 29.9773,
        lng: 31.169900000000002,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 12,
      user: {
        name: "Dr. Lottie Klein",
        email: "malinda.kuvalis@example.org",
      },
      specialization: "Dermatology",
      session_price: "486.00",
      availability_slots: [
        {
          date: "2025-12-28",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-28",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-28",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-28",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-28",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-28",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-28",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-28",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0422,
        lng: 31.218200000000003,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 13,
      user: {
        name: "Dr. Teagan Moore",
        email: "madilyn05@example.com",
      },
      specialization: "Orthopedics",
      session_price: "433.00",
      availability_slots: [
        {
          date: "2025-12-28",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-28",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-28",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-28",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-28",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-28",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-28",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-28",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.077099999999998,
        lng: 31.2394,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 14,
      user: {
        name: "Dr. Luciano Hilpert",
        email: "qhickle@example.net",
      },
      specialization: "Pediatrics",
      session_price: "176.00",
      availability_slots: [
        {
          date: "2025-12-30",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-30",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-30",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-30",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-30",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-30",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-30",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-30",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0287,
        lng: 31.160300000000003,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 15,
      user: {
        name: "Dr. Mrs. Jacynthe Ernser",
        email: "wiegand.emory@example.org",
      },
      specialization: "Pediatrics",
      session_price: "480.00",
      availability_slots: [
        {
          date: "2025-12-29",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-29",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-29",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-29",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-29",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-29",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-29",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-29",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0163,
        lng: 31.3332,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 16,
      user: {
        name: "Dr. Brenna Hills",
        email: "beverly.hudson@example.net",
      },
      specialization: "Orthopedics",
      session_price: "240.00",
      availability_slots: [
        {
          date: "2025-12-27",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-27",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-27",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-27",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-27",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-27",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-27",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-27",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.1277,
        lng: 31.306800000000003,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 17,
      user: {
        name: "Dr. Dr. Horacio Emard",
        email: "vratke@example.org",
      },
      specialization: "Pediatrics",
      session_price: "341.00",
      availability_slots: [
        {
          date: "2025-12-30",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-30",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-30",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-30",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-30",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-30",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-30",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-30",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 29.9516,
        lng: 31.239600000000003,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 18,
      user: {
        name: "Dr. Ola Hansen",
        email: "nikita53@example.com",
      },
      specialization: "Pediatrics",
      session_price: "145.00",
      availability_slots: [
        {
          date: "2026-01-01",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2026-01-01",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2026-01-01",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2026-01-01",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2026-01-01",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2026-01-01",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2026-01-01",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2026-01-01",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0719,
        lng: 31.2451,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 19,
      user: {
        name: "Dr. Dr. Marques Jakubowski II",
        email: "bward@example.net",
      },
      specialization: "Dermatology",
      session_price: "147.00",
      availability_slots: [
        {
          date: "2025-12-30",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2025-12-30",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2025-12-30",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2025-12-30",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2025-12-30",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2025-12-30",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2025-12-30",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2025-12-30",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 29.9867,
        lng: 31.297900000000002,
        address: "Cairo, Egypt",
      },
    },
    {
      id: 20,
      user: {
        name: "Dr. Arturo Lindgren V",
        email: "chloe.schaden@example.org",
      },
      specialization: "Dermatology",
      session_price: "187.00",
      availability_slots: [
        {
          date: "2026-01-02",
          from: "09:00",
          to: "09:30",
        },
        {
          date: "2026-01-02",
          from: "09:30",
          to: "10:00",
        },
        {
          date: "2026-01-02",
          from: "10:00",
          to: "10:30",
        },
        {
          date: "2026-01-02",
          from: "10:30",
          to: "11:00",
        },
        {
          date: "2026-01-02",
          from: "11:00",
          to: "11:30",
        },
        {
          date: "2026-01-02",
          from: "11:30",
          to: "12:00",
        },
        {
          date: "2026-01-02",
          from: "12:00",
          to: "12:30",
        },
        {
          date: "2026-01-02",
          from: "12:30",
          to: "13:00",
        },
      ],
      clinic_location: {
        lat: 30.0392,
        lng: 31.3337,
        address: "Cairo, Egypt",
      },
    },
  ]

  const { doctorInfo, handleDoctorInfo } = useMap()
  const { lat, lng } = useUserLocation()
  const mapLat = lat || 30.0444
  const mapLng = lng || 31.2357
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex justify-between items-center rounded-[10px] text-text-neutral-darker border px-6.5 py-3 text-sm cursor-pointer">
            <FaRoute className="pr-1" />
            <span>Map</span>
          </button>
        </DialogTrigger>
        <DialogContent className="md:min-w-3xl lg:min-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-left">
              {doctors.length} Results
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col lg:flex-row overflow-hidden">
            <div className="flex lg:flex-col gap-4 w-full h-fit lg:w-fit lg:h-100 overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 pr-4">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  name={doctor.user.name}
                  imageUrl={test} // no images in the response
                  specialty={doctor.specialization}
                  rate={4.5}
                  forBooking={false}
                  price={Number(doctor.session_price)}
                  startTime="9:00"
                  endTime="10:30"
                  onClick={() => {
                    handleDoctorInfo(
                      doctor.clinic_location.address,
                      doctor.clinic_location.lat,
                      doctor.clinic_location.lng
                    )
                  }}
                />
              ))}
            </div>
            <div className="flex-1 mt-4 rounded-[30px] h-100 overflow-hidden">
              <DoctorsMap
                variant="modal"
                doctors={doctors}
                doctorInfo={doctorInfo}
                handleDoctorInfo={handleDoctorInfo}
                userLocation={[mapLat, mapLng]}
                height="100"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

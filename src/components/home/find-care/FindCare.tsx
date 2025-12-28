import Heading from "../../ui/Heading"
import { CiSearch } from "react-icons/ci"

import Description from "../../ui/Description"
import LocationButton from "./LocationButton"
import DoctorsMap from "@/components/map/DoctorsMap"
import { useUserLocation } from "@/hooks/useUserLocation"
import { useNearestDoctors } from "@/hooks/useNearestDoctors"

export default function FindCare() {
  // const doctors = [
  //   {
  //     id: 1,
  //     user: {
  //       name: "Dr. Dr. Ila Stroman",
  //       email: "delaney.medhurst@example.org",
  //     },
  //     specialization: "Neurology",
  //     session_price: "368.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-31",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-31",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 29.9837,
  //       lng: 31.3233,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 2,
  //     user: {
  //       name: "Dr. Kayli Tromp",
  //       email: "glennie05@example.com",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "312.00",
  //     availability_slots: [
  //       {
  //         date: "2026-01-01",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.041999999999998,
  //       lng: 31.1719,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 3,
  //     user: {
  //       name: "Dr. Carley Gleichner",
  //       email: "alex19@example.net",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "127.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-28",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0427,
  //       lng: 31.192600000000002,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 4,
  //     user: {
  //       name: "Dr. Prof. Antoinette Towne DVM",
  //       email: "gjohns@example.org",
  //     },
  //     specialization: "Orthopedics",
  //     session_price: "374.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-29",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0132,
  //       lng: 31.1704,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 5,
  //     user: {
  //       name: "Dr. Mr. Kaley Gleason",
  //       email: "oreilly.jedidiah@example.com",
  //     },
  //     specialization: "Neurology",
  //     session_price: "255.00",
  //     availability_slots: [
  //       {
  //         date: "2026-01-02",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0564,
  //       lng: 31.2151,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 6,
  //     user: {
  //       name: "Dr. Miss Hertha Toy DVM",
  //       email: "aileen27@example.com",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "335.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-27",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.1058,
  //       lng: 31.192500000000003,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 7,
  //     user: {
  //       name: "Dr. Jaclyn Morar III",
  //       email: "keely68@example.com",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "319.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-29",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0567,
  //       lng: 31.2527,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 8,
  //     user: {
  //       name: "Dr. Mollie Smitham",
  //       email: "garry.hills@example.org",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "180.00",
  //     availability_slots: [
  //       {
  //         date: "2026-01-01",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0752,
  //       lng: 31.2195,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 9,
  //     user: {
  //       name: "Dr. Miss Stephanie Rippin",
  //       email: "osborne.purdy@example.net",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "197.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-30",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 29.9584,
  //       lng: 31.1749,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 10,
  //     user: {
  //       name: "Dr. Kody Funk",
  //       email: "casper.ashley@example.net",
  //     },
  //     specialization: "Neurology",
  //     session_price: "380.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-28",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0592,
  //       lng: 31.3216,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 11,
  //     user: {
  //       name: "Dr. Dr. Braxton Kuvalis",
  //       email: "javon.hagenes@example.com",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "239.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-27",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 29.9773,
  //       lng: 31.169900000000002,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 12,
  //     user: {
  //       name: "Dr. Lottie Klein",
  //       email: "malinda.kuvalis@example.org",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "486.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-28",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0422,
  //       lng: 31.218200000000003,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 13,
  //     user: {
  //       name: "Dr. Teagan Moore",
  //       email: "madilyn05@example.com",
  //     },
  //     specialization: "Orthopedics",
  //     session_price: "433.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-28",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-28",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.077099999999998,
  //       lng: 31.2394,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 14,
  //     user: {
  //       name: "Dr. Luciano Hilpert",
  //       email: "qhickle@example.net",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "176.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-30",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0287,
  //       lng: 31.160300000000003,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 15,
  //     user: {
  //       name: "Dr. Mrs. Jacynthe Ernser",
  //       email: "wiegand.emory@example.org",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "480.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-29",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-29",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0163,
  //       lng: 31.3332,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 16,
  //     user: {
  //       name: "Dr. Brenna Hills",
  //       email: "beverly.hudson@example.net",
  //     },
  //     specialization: "Orthopedics",
  //     session_price: "240.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-27",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-27",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.1277,
  //       lng: 31.306800000000003,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 17,
  //     user: {
  //       name: "Dr. Dr. Horacio Emard",
  //       email: "vratke@example.org",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "341.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-30",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 29.9516,
  //       lng: 31.239600000000003,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 18,
  //     user: {
  //       name: "Dr. Ola Hansen",
  //       email: "nikita53@example.com",
  //     },
  //     specialization: "Pediatrics",
  //     session_price: "145.00",
  //     availability_slots: [
  //       {
  //         date: "2026-01-01",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2026-01-01",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0719,
  //       lng: 31.2451,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 19,
  //     user: {
  //       name: "Dr. Dr. Marques Jakubowski II",
  //       email: "bward@example.net",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "147.00",
  //     availability_slots: [
  //       {
  //         date: "2025-12-30",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2025-12-30",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 29.9867,
  //       lng: 31.297900000000002,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  //   {
  //     id: 20,
  //     user: {
  //       name: "Dr. Arturo Lindgren V",
  //       email: "chloe.schaden@example.org",
  //     },
  //     specialization: "Dermatology",
  //     session_price: "187.00",
  //     availability_slots: [
  //       {
  //         date: "2026-01-02",
  //         from: "09:00",
  //         to: "09:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "09:30",
  //         to: "10:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "10:00",
  //         to: "10:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "10:30",
  //         to: "11:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "11:00",
  //         to: "11:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "11:30",
  //         to: "12:00",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "12:00",
  //         to: "12:30",
  //       },
  //       {
  //         date: "2026-01-02",
  //         from: "12:30",
  //         to: "13:00",
  //       },
  //     ],
  //     clinic_location: {
  //       lat: 30.0392,
  //       lng: 31.3337,
  //       address: "Cairo, Egypt",
  //     },
  //   },
  // ]

  const { lat, lng } = useUserLocation()
  console.log(lat, lng)
  const { data: doctors } = useNearestDoctors({ lat: lat, lng: lng })
  const mapLat = lat || 30.0444
  const mapLng = lng || 31.2357
  console.log(doctors)
  return (
    <div className="mt-50 home-container flex flex-col items-center  gap-6 lg:flex-row lg:justify-between ">
      <div className="flex flex-col lg:text-start text-center gap-2 lg:gap-8 max-w-122.5">
        <Heading tag={"h2"} className="text-[#05162C]">
          Find Care Near You in Seconds
        </Heading>
        <Description tag={"p"}>
          Allow location access or choose your city to instantly discover
          trusted doctors and clinics around you—quick, easy, and local.
        </Description>
        <LocationButton
          className="hidden lg:inline-flex"
          icon={<CiSearch />}
          text="Search by location"
        />
      </div>

      <div className="mt-4 rounded-[50px] h-130 w-full overflow-hidden md:w-160">
        <DoctorsMap
          variant="home"
          doctors={doctors || []}
          userLocation={[mapLat, mapLng]}
          height={"130"}
        />
      </div>

      <LocationButton
        className="inline-flex lg:hidden"
        icon={<CiSearch />}
        text="Search by location"
      />
    </div>
  )
}

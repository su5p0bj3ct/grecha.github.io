/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LogisticHub {
  id: string;
  name: string;
  lat: number;
  lng: number;
  coordinates: { x: number; y: number }; // Simulated screen coordinates for elegant map
  status: 'active' | 'upcoming' | 'pending';
  type: 'origin' | 'hub' | 'destination';
  metrics?: {
    storage: string;
    temperature: string;
    humidity: string;
    stock: string;
  };
}

export interface TruckTelemetry {
  id: string;
  name: string;
  driver: string;
  position: { x: number; y: number };
  route: string[];
  status: 'en_route' | 'delivered' | 'loading';
  lastPing: string;
  speed: string;
  temp: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  role: 'dispatch' | 'store' | 'driver' | 'sales';
  text: string;
  timestamp: string;
}

export interface BenefitCard {
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
}

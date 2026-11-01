/**
 * LocalStorage data persistence utilities for DW Saloons
 */

export interface Booking {
  id: string;
  name: string;
  phone: string;
  look: string;
  artist: string;
  date: string;
  time: string;
  notes?: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  createdAt: string;
}

const STORAGE_KEY = 'dw_saloons_bookings_v1';

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'DW-8091',
    name: 'Ayesha Raza',
    phone: '0300 1234567',
    look: 'Barat Special',
    artist: 'Dania W. (Lead Artist)',
    date: '2026-10-24',
    time: '1:00 PM',
    notes: 'Maroon velvet lehenga, dramatic eyes with clean cut crease.',
    status: 'Confirmed',
    createdAt: '2026-10-14T10:00:00.000Z',
  },
  {
    id: 'DW-8092',
    name: 'Mariam Tariq',
    phone: '0321 7654321',
    look: 'Mehndi Makeup',
    artist: 'Hira Fatima (Bridal Specialist)',
    date: '2026-10-28',
    time: '3:00 PM',
    notes: 'Fresh dewy finish with yellow floral accessories.',
    status: 'Confirmed',
    createdAt: '2026-10-14T14:30:00.000Z',
  },
];

export const getBookings = (): Booking[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_BOOKINGS;
  } catch (err) {
    console.error('Error reading bookings from LocalStorage:', err);
    return INITIAL_BOOKINGS;
  }
};

export const saveBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'> & { status?: Booking['status'] }): Booking => {
  const current = getBookings();
  const newBooking: Booking = {
    ...bookingData,
    id: `DW-${Math.floor(1000 + Math.random() * 9000)}`,
    status: bookingData.status || 'Confirmed',
    createdAt: new Date().toISOString(),
  };

  const updated = [newBooking, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save booking to LocalStorage:', err);
  }
  return newBooking;
};

export const updateBooking = (id: string, updates: Partial<Booking>): boolean => {
  try {
    const current = getBookings();
    const index = current.findIndex((b) => b.id === id);
    if (index === -1) return false;

    current[index] = { ...current[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    return true;
  } catch (err) {
    console.error('Failed to update booking in LocalStorage:', err);
    return false;
  }
};

export const deleteBooking = (id: string): boolean => {
  try {
    const current = getBookings();
    const filtered = current.filter((b) => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error('Failed to delete booking in LocalStorage:', err);
    return false;
  }
};

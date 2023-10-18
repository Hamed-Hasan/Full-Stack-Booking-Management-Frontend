export interface IMeta {
    limit: number;
    page: number;
    total: number;
  }
  
  export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
  };
  
  export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
  
  export type IGenericErrorMessage = {
    path: string | number;
    message: string;
  };
  


  export interface IUser {
    id: string;
    email: string;
    password: string;
    needsPasswordChange?: boolean;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    bookings: IBooking[];
    reviews: IReview[];
    cartItems: ICartItem[];
    blogPosts: IBlogPost[];
    feedbacks: IFeedback[];
    notifications: INotification[];
    profile: IProfile | null;
  }
  
  export interface IProfile {
    id: string;
    userId: string;
    user: IUser;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: Date | null;
    phoneNumber?: string | null;
    address?: string | null;
    bio?: string | null;
    profileImage?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IService {
    id: string;
    name?: string | null;
    description?: string | null;
    pricePerHour: number;
    brand: string;
    model: string;
    fuelType?: string | null;
    transmission?: string | null;
    seatingCapacity: number;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    category: IServiceCategory;
    images: IImage[];
    reviews: IReview[];
    bookings: IBooking[];
    cartItems: ICartItem[];
    availabilities: IAvailability[];
  }
  
  export interface IImage {
    id: string;
    serviceId: string;
    service: IService;
    filePath: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IServiceCategory {
    id: string;
    name: string;
    services: IService[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IBooking {
    id: string;
    userId: string;
    user: IUser;
    serviceId: string;
    service: IService;
    scheduledDate: Date;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IReview {
    id: string;
    userId: string;
    user: IUser;
    serviceId: string;
    service: IService;
    review: string;
    rating: RatingValue;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ICartItem {
    id: string;
    userId: string;
    user: IUser;
    serviceId: string;
    service: IService;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IAvailability {
    id: string;
    serviceId: string;
    service: IService;
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    daysOfWeek: DaysOfWeek;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IBlogPost {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: IUser;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IFeedback {
    id: string;
    userId: string;
    user: IUser;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface INotification {
    id: string;
    userId: string;
    user: IUser;
    message: string;
    read: boolean;
    createdAt: Date;
  }


  interface DaysOfWeek {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  }
  
  
  enum UserRole {
    user = "user",
    admin = "admin",
    superAdmin = "superAdmin",
  }
  
  enum BookingStatus {
    pending = "pending",
    confirmed = "confirmed",
    cancelled = "cancelled",
  }
  
  enum RatingValue {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE",
  }
  
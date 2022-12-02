import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
    "pk_test_51MAhvzGmzXS81173x8hfApmX6Fz7lt6lcDBHH2g5gSyHFHLvNc8JNyXIcz4t3sOxArnrmWXBzVZhZ26cKHMiQMXg00OKQrirQj"
)
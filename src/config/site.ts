export const siteConfig = {
 siteName: "Betwin67",
  casinoUrl: "https://betwin67.com",
  whatsappNumber: "8801824941728",
  whatsappMessage: "হ্যালো, আমি আপনাদের ওয়েবসাইটের গেমগুলো সম্পর্কে জানতে চাই। আমাকে সাহায্য করুন।",
} as const

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dpyi03dqc/**",
      },
    ],
  },
  output: "export",
  // output: "standalone",
};

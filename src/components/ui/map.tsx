export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6253.663900564281!2d46.74530710744438!3d24.606407290071814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1745472568836!5m2!1sen!2seg"
      width="100%"
      height="400"
      title="google maps"
      className="max-md:h-[500px] rounded-xl"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

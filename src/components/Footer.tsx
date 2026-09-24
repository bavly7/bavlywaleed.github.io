export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          &copy; {year} Bavly Waleed. All rights reserved. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> 
          Designed and built for production.
        </p>
      </div>
    </footer>
  );
}

const BookingServiceSelectionSkeleton = () => {
  return (
    <>
      <div className="bg-brand-secondary p-4 rounded-lg animate-pulse">
        <div className=" w-full h-5 rounded bg-brand-primary mb-5"></div>
        <div className="space-y-2">
          {/* Duration */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 bg-cyan-700 rounded-full"></div>
            <div className="h-4 w-1/3 bg-brand-primary rounded"></div>
          </div>
          {/* Price */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 bg-cyan-700 rounded-full"></div>
            <div className="h-4 w-1/4 bg-brand-primary rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingServiceSelectionSkeleton;

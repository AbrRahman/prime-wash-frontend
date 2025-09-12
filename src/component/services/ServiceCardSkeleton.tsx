const ServiceCardSkeleton = () => {
  return (
    <div className="card bg-brand-secondary card-sm md:card-md shadow-sm animate-pulse">
      {/* Image placeholder */}
      <div className="h-40 w-full bg-brand-secondary rounded-t-lg"></div>

      <div className="card-body space-y-3">
        {/* Title */}
        <div className="h-5 w-2/3 bg-brand-primary rounded"></div>

        {/* Description */}
        <div className="h-4 w-full bg-brand-primary rounded"></div>
        <div className="h-4 w-5/6 bg-brand-primary rounded"></div>

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

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <div className="h-8 w-24 bg-cyan-700 rounded-md"></div>
          <div className="h-8 w-28 bg-cyan-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;

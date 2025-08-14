import React from 'react';
import CategoryGrid  from "./Components/CategoryGrid";

const CategoryGridInfinite = ({ data, items }) => {

    return (
        <div>
            {items && items.length > 0 && (
         <div className={`${data?.class_container || "bg-white"}`}>
                   <div className="px-primary 2xl:px-0 2xl:max-w-7xl mx-auto py-12 lg:py-20">
                    {/* Header */}
                    {data?.title && (
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                            <h2 className={`text-3xl  font-semibold tracking-normal customtext-neutral-dark max-w-2xl 2xl:max-w-6xl  ${data?.class_title || "sm:text-4xl lg:text-5xl 2xl:text-6xl"}`}>
                                {data?.title}
                            </h2>
                            {data?.link_catalog && (
                                <a
                                    href={data?.link_catalog}
                                    className="bg-primary transition-all duration-300 text-white border-none items-center px-10 py-3 text-base rounded-full font-semibold cursor-pointer hover:opacity-90"
                                >
                                    Ver todos
                                </a>
                            )}
                         
                        </div>
                    )}

                    <div className="mt-6" id="sectioncategory">
                        <CategoryGrid categories={items} />
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default CategoryGridInfinite;
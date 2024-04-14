import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Person {
  name: string;
  image?: ImageWidget;
}

export interface Props {
  persons?: Person[];
  description: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  persons,
  description,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16 gap-5">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
        </div>
        <div class="flex flex-row gap-5 justify-center">
          {persons?.map((person) => (
            <div class="border border-secondary rounded-lg overflow-hidden">
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 320px) 50vw, 15vw"
                src={person.image}
                alt={person.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{person.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div class="flex justify-center">
          {description}
        </div>
      </div>
    </div>
  );
}

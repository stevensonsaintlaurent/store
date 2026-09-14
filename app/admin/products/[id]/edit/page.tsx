import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import ImageInputContainer from "@/components/form/ImageInputContainer";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditProductPage = async ({ params }: EditProductPageProps) => {
  const { id } = await params;

  const product = await fetchAdminProductDetails(id);

  const { name, company, description, featured, price } = product;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">edit product</h1>

      <div className="border p-8 rounded-md">
        {/* Image Input Container */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
      </div>

      <div className="border p-8 rounded-md">
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />

            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />

            <PriceInput defaultValue={price} />
          </div>

          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />

          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>

          <SubmitButton text="Update Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditProductPage;

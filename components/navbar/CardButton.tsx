import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

const CardButton = () => {
  const numItemsInCart = 9;

  return (
    <Link
      href="/cart"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-4xl border border-border bg-input/30 transition-all hover:bg-input/50 hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 relative"
      aria-label={`Shopping cart with ${numItemsInCart} items`}
    >
      <LuShoppingCart className="h-4 w-4" />

      <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
        {numItemsInCart}
      </span>
    </Link>
  );
};

export default CardButton;

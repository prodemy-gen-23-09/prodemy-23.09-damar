import { OrderItem } from "../../interfaces/checkoutInterface";

const OrderCard = ({ product, quantity, sub_total }: OrderItem) => {
  return (
    <div className="flex flex-row items-center gap-x-2 rounded-xl border border-gray-200 px-5 py-2">
      <div className="me-1 w-24">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-20 rounded-xl"
        />
      </div>
      <div className="tetxt-sm flex flex-1 flex-row items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="font-medium line-clamp-1">{product.name}</p>
          <p className="text-sm">{`${quantity}x Rp. ${product.price.toLocaleString(
            "id-ID",
          )}`}</p>
        </div>
        <div>
          <p>subtotal</p>
          <p className="text-sm font-semibold">
            {`Rp. ${sub_total.toLocaleString("id-ID")}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
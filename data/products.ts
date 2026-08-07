export type ProductPlatform = "macOS"
export type ProductStatus = "available"

export type Product = {
  readonly id: string
  readonly url: string
  readonly platforms: ReadonlyArray<ProductPlatform>
  readonly status: ProductStatus
}

export const PRODUCTS: ReadonlyArray<Product> = [
  {
    id: "hexaDevKit",
    url: "https://hexadevkit.anibalventura.com",
    platforms: ["macOS"],
    status: "available",
  },
]

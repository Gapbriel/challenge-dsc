import { useEffect, useState } from "react";

export type Product = {
  name: string;
  sku: string;
  price: number;
  assets: {
    detail: {
      file: {
        url: string;
      };
    };
  };
};

export const useProducts = () => {
  const [products, setProducts] = useState<Array<Product>>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          name: "One Wipe Charlies 50 ct",
          sku: "GK-OWC-50C-CURRENT",
          price: 5.5,
          assets: {
            detail: {
              file: {
                url:
                  "https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/6HRiDZkSRdD3Zd1CXM7OoZ/6fb3d37a64d1a36cab83cd417eaffb21/GK-OWC-50C-CURRENT-DETAIL.png"
              }
            }
          }
        },
        {
          name: "Shave Butter",
          sku: "ESB-6Z-CURRENT",
          price: 8,
          assets: {
            detail: {
              file: {
                url:
                  "https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/5R7KAYHTnaQU6M2COSKcWY/3e62da16c84627b2e6d66d590fc80c0d/ESB-6Z-1.png"
              }
            }
          }
        },
        {
          name: "BLUEPRINT 101",
          sku: "BPF-50M-101-CURRENT",
          price: 50,
          assets: {
            detail: {
              file: {
                url:
                  "https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/4btR29Z9UkuM4e2CAwMSwo/bfc9214e22bc151a31aa723ea987986d/BPF-50M-101-CURRENT-PDPHEADER.png"
              }
            }
          }
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return {
    loading,
    products
  };
};

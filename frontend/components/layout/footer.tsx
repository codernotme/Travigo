import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="border-t border-divider py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <div className="flex flex-col gap-2">
              <Link color="foreground" href="#">
                Company
              </Link>
              <Link color="foreground" href="#">
                Careers
              </Link>
              <Link color="foreground" href="#">
                Press
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="flex flex-col gap-2">
              <Link color="foreground" href="#">
                Help Center
              </Link>
              <Link color="foreground" href="#">
                Safety
              </Link>
              <Link color="foreground" href="#">
                Cancellation Options
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link color="foreground" href="#">
                Privacy Policy
              </Link>
              <Link color="foreground" href="#">
                Terms of Service
              </Link>
              <Link color="foreground" href="#">
                Cookie Settings
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:twitter" />
              </Link>
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:facebook" />
              </Link>
              <Link color="foreground" href="#">
                <Icon className="text-xl" icon="lucide:instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-divider text-center text-small text-default-500">
          © 2024 Travigo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}